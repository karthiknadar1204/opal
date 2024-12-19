import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "opal", // Unique app ID
  name: "Opal",
  retryFunction: async (attempt) => ({
    delay: 2 ** attempt * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});