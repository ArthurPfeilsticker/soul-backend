export class CreateMentoringSessionDto {
    mentorId: number;
    menteeId: number;
    date: Date;
    sessionNumber: number;
    status: string;
    durationMinutes: number;
    mentorRating: number;
    practicedSkills: string[];
    topics: string;
  }