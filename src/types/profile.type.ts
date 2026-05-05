export interface Profile {
  id: number;
  name: string;
  email: string;
  role: string;
  photoUrl: string | null;
}

export interface App {
  id: number;
  name: string;
}

export interface Course {
  id: number;
  name: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  photoUrl: string | null;
}

export interface WeeklyProgress {
  from: string;
  to: string;
  prescribedExercises: number;
  completedExercises: number;
  percentCompleted: number;
}

export interface ProfileResponse {
  profile: Profile;
  app: App;
  course: Course;
  responsibleStudent: User;
  coordinator: User;
  weeklyProgress: WeeklyProgress;
}
