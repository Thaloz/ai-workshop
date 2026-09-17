import type { ActivityItem, Client } from "./types";

export const clients: Client[] = [
  {
    id: "northstar",
    name: "Northstar Labs",
    accountLead: "Sofia R.",
    health: "at-risk",
    score: 42,
    trend: -18,
    lastContact: "6 days ago",
    summary: "Delivery confidence fell after two milestones moved without a clear recovery plan.",
    evidence: [
      "Weekly pulse changed from 8/10 to 5/10",
      "Two milestones moved in the last 14 days",
      "The client asked for a recovery plan on Monday",
    ],
    nextAction:
      "Schedule a 30-minute recovery review with the delivery lead and send a written plan before Friday.",
  },
  {
    id: "riverbank",
    name: "Riverbank Health",
    accountLead: "Mateo G.",
    health: "watch",
    score: 68,
    trend: -6,
    lastContact: "2 days ago",
    summary:
      "The relationship is stable, but response time is starting to affect stakeholder confidence.",
    evidence: [
      "Average response time increased from 4 to 11 hours",
      "One stakeholder raised a communication concern",
      "All current delivery milestones remain on track",
    ],
    nextAction:
      "Agree on a response-time owner and confirm the new communication routine with the client.",
  },
  {
    id: "orbit",
    name: "Orbit Commerce",
    accountLead: "Lucia P.",
    health: "healthy",
    score: 91,
    trend: 4,
    lastContact: "Yesterday",
    summary:
      "Strong delivery results and clear communication are creating room for a wider partnership.",
    evidence: [
      "Latest pulse score is 9/10",
      "All milestones shipped on time this month",
      "The sponsor requested an expansion conversation",
    ],
    nextAction:
      "Prepare two expansion options and review them with the account lead before contacting the client.",
  },
  {
    id: "acme",
    name: "Acme Mobility",
    accountLead: "Diego A.",
    health: "healthy",
    score: 84,
    trend: 2,
    lastContact: "3 days ago",
    summary: "The team is delivering consistently and the next quarterly goal is already aligned.",
    evidence: [
      "Three consecutive milestones delivered on time",
      "No unresolved escalation is open",
      "Quarterly priorities were confirmed last week",
    ],
    nextAction: "Continue the current cadence and confirm the quarterly review date.",
  },
];

export const initialActivity: ActivityItem[] = [
  { id: "a1", title: "Health changed", detail: "Northstar Labs moved to At risk", time: "09:42" },
  { id: "a2", title: "Pulse received", detail: "Orbit Commerce submitted 9/10", time: "Yesterday" },
];
