import type { ReviewRule } from "./types";

// Ticket 2 owns this file. Replace these rules with the role-specific review logic.
export const reviewRules: ReviewRule[] = [
  {
    id: "purpose",
    label: "Purpose is clear",
    detail: "The request states the result and who will use it.",
    state: "ready",
  },
  {
    id: "evidence",
    label: "Evidence is attached",
    detail: "The manager can trace each important claim to an input.",
    state: "review",
  },
  {
    id: "owner",
    label: "Human owner is named",
    detail: "A person remains accountable for the final decision.",
    state: "missing",
  },
];
