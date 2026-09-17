export type HealthState = "healthy" | "watch" | "at-risk";

export type Client = {
  id: string;
  name: string;
  accountLead: string;
  health: HealthState;
  score: number;
  trend: number;
  lastContact: string;
  summary: string;
  evidence: string[];
  nextAction: string;
};

export type ActivityItem = {
  id: string;
  title: string;
  detail: string;
  time: string;
};
