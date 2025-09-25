import sqlite3 from 'sqlite3';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'conversations.db');

// Ensure data directory exists
import fs from 'fs';
const dataDir = path.dirname(DB_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

export interface ConversationMessage {
  id?: number;
  conversation_id: string;
  sender: 'user' | 'assistant';
  message: string;
  timestamp: Date;
}

export interface Conversation {
  id?: number;
  conversation_id: string;
  user_name?: string;
  user_email?: string;
  status: 'active' | 'completed';
  created_at: Date;
  completed_at?: Date;
}

export interface ConsultationRequest {
  id?: number;
  conversation_id: string;
  user_name: string;
  user_email: string;
  company_name?: string;
  phone_number?: string;
  industry?: string;
  business_size?: string;
  consultation_type: string;
  project_description: string;
  budget_range?: string;
  timeline?: string;
  preferred_contact_method: 'email' | 'phone' | 'video_call';
  preferred_time_slots?: string;
  additional_notes?: string;
  status: 'pending' | 'contacted' | 'scheduled' | 'completed' | 'cancelled';
  created_at: Date;
  contacted_at?: Date;
}

class Database {
  private db: sqlite3.Database;

  constructor() {
    this.db = new sqlite3.Database(DB_PATH);
    this.initTables();
  }

  private initTables() {
    this.db.serialize(() => {
      // Create conversations table
      this.db.run(`
        CREATE TABLE IF NOT EXISTS conversations (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          conversation_id TEXT UNIQUE NOT NULL,
          user_name TEXT,
          user_email TEXT,
          status TEXT DEFAULT 'active',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          completed_at DATETIME
        )
      `);

      // Create messages table
      this.db.run(`
        CREATE TABLE IF NOT EXISTS messages (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          conversation_id TEXT NOT NULL,
          sender TEXT NOT NULL,
          message TEXT NOT NULL,
          timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (conversation_id) REFERENCES conversations (conversation_id)
        )
      `);

      // Create consultation_requests table
      this.db.run(`
        CREATE TABLE IF NOT EXISTS consultation_requests (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          conversation_id TEXT NOT NULL,
          user_name TEXT NOT NULL,
          user_email TEXT NOT NULL,
          company_name TEXT,
          phone_number TEXT,
          industry TEXT,
          business_size TEXT,
          consultation_type TEXT NOT NULL,
          project_description TEXT NOT NULL,
          budget_range TEXT,
          timeline TEXT,
          preferred_contact_method TEXT NOT NULL DEFAULT 'email',
          preferred_time_slots TEXT,
          additional_notes TEXT,
          status TEXT DEFAULT 'pending',
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          contacted_at DATETIME,
          FOREIGN KEY (conversation_id) REFERENCES conversations (conversation_id)
        )
      `);
    });
  }

  async saveConversation(conversation: Conversation): Promise<void> {
    return new Promise((resolve, reject) => {
      const stmt = this.db.prepare(`
        INSERT OR REPLACE INTO conversations 
        (conversation_id, user_name, user_email, status, created_at, completed_at)
        VALUES (?, ?, ?, ?, ?, ?)
      `);
      
      stmt.run([
        conversation.conversation_id,
        conversation.user_name,
        conversation.user_email,
        conversation.status,
        conversation.created_at.toISOString(),
        conversation.completed_at?.toISOString()
      ], function (err) {
        if (err) reject(err);
        else resolve();
      });
      
      stmt.finalize();
    });
  }

  async saveMessage(message: ConversationMessage): Promise<void> {
    return new Promise((resolve, reject) => {
      const stmt = this.db.prepare(`
        INSERT INTO messages (conversation_id, sender, message, timestamp)
        VALUES (?, ?, ?, ?)
      `);
      
      stmt.run([
        message.conversation_id,
        message.sender,
        message.message,
        message.timestamp.toISOString()
      ], function (err) {
        if (err) reject(err);
        else resolve();
      });
      
      stmt.finalize();
    });
  }

  async getConversation(conversationId: string): Promise<{
    conversation: Conversation | null;
    messages: ConversationMessage[];
  }> {
    return new Promise((resolve, reject) => {
      // Get conversation details
      this.db.get(`
        SELECT * FROM conversations WHERE conversation_id = ?
      `, [conversationId], (err, conversation) => {
        if (err) {
          reject(err);
          return;
        }

        // Get messages
        this.db.all(`
          SELECT * FROM messages WHERE conversation_id = ? ORDER BY timestamp ASC
        `, [conversationId], (err, messages) => {
          if (err) {
            reject(err);
            return;
          }

          resolve({
            conversation: conversation as Conversation | null,
            messages: (messages as ConversationMessage[]) || []
          });
        });
      });
    });
  }

  async completeConversation(conversationId: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const stmt = this.db.prepare(`
        UPDATE conversations 
        SET status = 'completed', completed_at = CURRENT_TIMESTAMP
        WHERE conversation_id = ?
      `);
      
      stmt.run([conversationId], function (err) {
        if (err) reject(err);
        else resolve();
      });
      
      stmt.finalize();
    });
  }

  async saveConsultationRequest(request: ConsultationRequest): Promise<number> {
    return new Promise((resolve, reject) => {
      const stmt = this.db.prepare(`
        INSERT INTO consultation_requests (
          conversation_id, user_name, user_email, company_name, phone_number,
          industry, business_size, consultation_type, project_description,
          budget_range, timeline, preferred_contact_method, preferred_time_slots,
          additional_notes, status, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);
      
      stmt.run([
        request.conversation_id,
        request.user_name,
        request.user_email,
        request.company_name,
        request.phone_number,
        request.industry,
        request.business_size,
        request.consultation_type,
        request.project_description,
        request.budget_range,
        request.timeline,
        request.preferred_contact_method,
        request.preferred_time_slots,
        request.additional_notes,
        request.status,
        request.created_at.toISOString()
      ], function (err) {
        if (err) reject(err);
        else resolve(this.lastID);
      });
      
      stmt.finalize();
    });
  }


}

export const database = new Database();