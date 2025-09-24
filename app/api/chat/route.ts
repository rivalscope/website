import { openai } from "@ai-sdk/openai";
import { streamText, tool, convertToModelMessages } from "ai";
import { z } from "zod";

export interface Hub {
  climate: Record<"low" | "high", number>;
  lights: Array<{ name: string; status: boolean }>;
  locks: Array<{ name: string; isLocked: boolean }>;
}

let hub: Hub = {
  climate: {
    low: 23,
    high: 25,
  },
  lights: [
    { name: "patio", status: true },
    { name: "kitchen", status: false },
    { name: "garage", status: true },
  ],
  locks: [{ name: "back door", isLocked: true }],
};

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    system: `
      - you are a friendly home automation assistant
      - reply in lower case
      - when using tools, provide a brief text response describing what you're showing
    `,
    messages: convertToModelMessages(messages),
    tools: {
      viewCameras: tool({
        description: "view current active cameras",
        inputSchema: z.object({}),
        execute: async () => {
          return {
            type: "ui-component",
            component: "CameraView",
            data: {},
            message: "here are your active cameras"
          };
        },
      }),
      viewHub: tool({
        description:
          "view the hub that contains current quick summary and actions for temperature, lights, and locks",
        inputSchema: z.object({}),
        execute: async () => {
          return {
            type: "ui-component",
            component: "HubView",
            data: hub,
            message: "here's your smart home hub"
          };
        },
      }),
      updateHub: tool({
        description: "update the hub with new values",
        inputSchema: z.object({
          hub: z.object({
            climate: z.object({
              low: z.number(),
              high: z.number(),
            }),
            lights: z.array(
              z.object({ name: z.string(), status: z.boolean() }),
            ),
            locks: z.array(
              z.object({ name: z.string(), isLocked: z.boolean() }),
            ),
          }),
        }),
        execute: async ({ hub: newHub }: { hub: Hub }) => {
          hub = newHub;
          return {
            type: "ui-component",
            component: "HubView",
            data: hub,
            message: "i've updated your hub settings"
          };
        },
      }),
      viewUsage: tool({
        description: "view current usage for electricity, water, or gas",
        inputSchema: z.object({
          type: z.enum(["electricity", "water", "gas"]),
        }),
        execute: async ({ type }: { type: "electricity" | "water" | "gas" }) => {
          return {
            type: "ui-component",
            component: "UsageView",
            data: { type },
            message: `here's your ${type} usage`
          };
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}