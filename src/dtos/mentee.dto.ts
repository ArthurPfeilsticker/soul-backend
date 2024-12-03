export class CreateMenteeDto {
    name: string;
    mentoringSessionsAttended: number;
    currentMentorId: number;    //reference to the mentees current mentor ID
  }
  