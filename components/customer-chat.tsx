"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ConsultationForm } from "@/components/consultation-form";
import { Message } from "@/components/message";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string | React.ReactNode;
  timestamp?: Date;
}

interface CustomerChatProps {
  businessName?: string;
}

const quickMessages = [
  "What services does AILaboratories offer?",
  "I'm interested in AI consultancy",
  "Tell me about workflow automation",
  "How can AI help my business?",
  "What are your pricing options?"
];

export function CustomerChat({ 
  businessName = "AILaboratories"
}: CustomerChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [hasProvidedInfo, setHasProvidedInfo] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hi! I'm the AILaboratories AI assistant. I'm here to help you learn about our AI consultancy services, workflow automation, and R&D offerings. How can I assist you today?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  
  // Generate unique conversation ID
  const [conversationId] = useState(() => 
    `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );

  // Render UI components from tool results
  const renderUIComponent = (result: any) => {
    if (result?.type === "ui-component") {
      switch (result.component) {
        case "ConsultationForm":
          return (
            <ConsultationForm
              conversationId={result.data?.conversationId || conversationId}
              onSuccess={() => {
                // Add success message to chat
                setMessages(prev => [...prev, {
                  id: `success_${Date.now()}`,
                  role: 'assistant',
                  content: 'Perfect! Your consultation request has been submitted successfully. Our team will contact you within 24 hours.',
                  timestamp: new Date()
                }]);
              }}
              onCancel={() => {
                // Add cancelled message to chat
                setMessages(prev => [...prev, {
                  id: `cancelled_${Date.now()}`,
                  role: 'assistant',
                  content: 'No problem! Feel free to ask me any other questions about our AI services.',
                  timestamp: new Date()
                }]);
              }}
            />
          );
        default:
          return null;
      }
    }
    return null;
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  const handleQuickMessage = (quickMsg: string) => {
    setInput(quickMsg);
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setHasProvidedInfo(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const requestBody = {
        messages: [...messages, userMessage].map(msg => ({
          role: msg.role,
          content: msg.content
        })),
        conversationId,
        userName: hasProvidedInfo ? userName : undefined,
        userEmail: hasProvidedInfo ? userEmail : undefined,
      };
      
      console.log('Sending request:', requestBody);
      
      const response = await fetch('/api/customer-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error:', response.status, errorText);
        throw new Error(`Failed to get response: ${response.status} - ${errorText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No reader available');

      let assistantContent = '';
      const assistantMessage: Message = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        content: '',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.content) {
                assistantContent += data.content;
                setMessages(prev => 
                  prev.map(msg => 
                    msg.id === assistantMessage.id 
                      ? { ...msg, content: assistantContent }
                      : msg
                  )
                );
              }
              // Handle tool calls (for future expansion)
              else if (data.type === 'tool-call') {
                console.log('Tool call:', data.toolName, data.args);
              }
              else if (data.type === 'tool-result') {
                console.log('Tool result:', data.toolName, data.result);
                // Handle consultation form trigger - render as UI component
                if (data.toolName === 'request_consultation' && data.result?.type === 'ui-component') {
                  const component = renderUIComponent(data.result);
                  if (component) {
                    // Add the component as a message
                    setMessages(prev => [...prev, {
                      id: `ui_${Date.now()}`,
                      role: 'assistant',
                      content: component,
                      timestamp: new Date()
                    }]);
                  }
                }
              }
            } catch (e) {
              // Ignore parsing errors
            }
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        id: `error_${Date.now()}`,
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen ? (
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle className="h-6 w-6 text-white" />
            <span className="sr-only">Open AI Chat</span>
          </Button>
        ) : (
          <Card className="w-96 h-[600px] shadow-2xl border-0 flex flex-col overflow-hidden">
            <CardHeader className="bg-blue-600 text-white rounded-t-lg flex-shrink-0 py-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 min-w-0">
                  <Bot className="h-5 w-5 flex-shrink-0" />
                  <div className="min-w-0">
                    <CardTitle className="text-white text-sm truncate">
                      {businessName} AI Assistant
                    </CardTitle>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-blue-700 h-8 w-8 p-0 flex-shrink-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-0 flex-1 flex flex-col min-h-0 overflow-hidden">
              {/* User Info Collection */}
              {!hasProvidedInfo && (
                <div className="p-4 bg-gray-50 border-b">
                  <form onSubmit={handleInfoSubmit} className="space-y-3">
                    <div>
                      <Input
                        placeholder="Your name (optional but helpful)"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email (optional)"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="text-sm"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="sm"
                      className="w-full bg-blue-600 hover:bg-blue-700"
                    >
                      Start Chatting
                    </Button>
                  </form>
                </div>
              )}

              {/* Quick Messages */}
              {hasProvidedInfo && messages.length <= 1 && (
                <div className="p-3 bg-gray-50 border-b">
                  <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
                  <div className="flex flex-wrap gap-1">
                    {quickMessages.map((msg, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickMessage(msg)}
                        className="text-xs h-7 px-2"
                      >
                        {msg}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Messages */}
              <ScrollArea className="flex-1 overflow-hidden" ref={scrollAreaRef}>
                <div className="space-y-4 p-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex items-start space-x-2 w-full ${
                        message.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <Avatar className="h-8 w-8 flex-shrink-0">
                          <AvatarFallback className="bg-blue-100 text-blue-600">
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      
                      <div
                        className={`max-w-[calc(100%-3rem)] min-w-0 rounded-lg p-3 text-sm break-words overflow-wrap-anywhere chat-message-container overflow-hidden ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                        style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
                      >
                        <div className="whitespace-pre-wrap break-words">
                          {typeof message.content === 'string' ? message.content : message.content}
                        </div>
                      </div>
                      
                      {message.role === 'user' && (
                        <Avatar className="h-8 w-8 flex-shrink-0">
                          <AvatarFallback className="bg-gray-200 text-gray-600">
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex items-start space-x-2 w-full">
                      <Avatar className="h-8 w-8 flex-shrink-0">
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          <Bot className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-gray-100 rounded-lg p-3 text-sm">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Consultation Form or Input */}
              {hasProvidedInfo && (
                <div className="border-t bg-white">
                  {showConsultationForm ? (
                    <div className="p-4">
                      <ConsultationForm
                        conversationId={conversationId}
                        onSuccess={() => {
                          setShowConsultationForm(false);
                          // Add success message to chat
                          setMessages(prev => [...prev, {
                            id: `success_${Date.now()}`,
                            role: 'assistant',
                            content: 'Perfect! Your consultation request has been submitted successfully. Our team will contact you within 24 hours.',
                            timestamp: new Date()
                          }]);
                        }}
                        onCancel={() => {
                          setShowConsultationForm(false);
                          // Add cancelled message to chat
                          setMessages(prev => [...prev, {
                            id: `cancelled_${Date.now()}`,
                            role: 'assistant',
                            content: 'No problem! Feel free to ask me any other questions about our AI services.',
                            timestamp: new Date()
                          }]);
                        }}
                      />
                    </div>
                  ) : (
                    <div className="p-3">
                      <form onSubmit={handleSubmit} className="flex space-x-2">
                        <Input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          placeholder="Type your message..."
                          disabled={isLoading}
                          className="flex-1"
                        />
                        <Button
                          type="submit"
                          size="sm"
                          disabled={isLoading || !input.trim()}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Backdrop overlay when chat is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}