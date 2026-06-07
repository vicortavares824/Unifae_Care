export interface Plan {
  today: string;
  weekStart: string;
  weekEnd: string;
  prescriptionId: number;
  days: Day[];
}

export interface Day {
  date: string;
  label: string;
  isToday: boolean;
  summary: Summary;
  exercises: Exercise[];
  appointments: Appointment[];
}

export interface Summary {
  total: number;
  completed: number;
  pendingFeedback: number;
  percentCompleted: number;
}

export interface Exercise {
  prescriptionItemId: number;
  exerciseId: number;
  title: string;
  videoUrl: string;
  description: string;
  taxonomy: Taxonomy;
  metrics: Metrics;
  steps: Step[];
  instructions: string;
  physiotherapistNotes: string;
  execution: Execution;
}

export interface Taxonomy {
  axis: string;
  problem: string;
  objective: string;
}

export interface Metrics {
  repetitionsRaw: string;
  series: string | null;
  volume: string | null;
}

export interface Step {
  order: number;
  text: string;
}

export interface Execution {
  completed: boolean;
  executionId: number | null;
  performedAt: string | null; // ISO date string or null
  feedbackSubmitted: boolean;
  feedbackScore: number | null;
  feedbackRecordedAt: string | null;
  feedbackPending: boolean;
}

export interface CompletionResponse {
  executionId: number;
  prescriptionId: number;
  prescriptionItemId: number;
  exerciseId: number;
  performedAt: string;
  message: string;
}

export type Appointment = Record<string, any>;

export default Plan;
