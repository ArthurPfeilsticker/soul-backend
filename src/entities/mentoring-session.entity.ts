import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Mentee } from './mentee.entity';
import { Mentor } from './mentor.entity';

export enum  MentorshipStatus{
  DONE = 'Done',
  CANCELED = 'Canceled',
  RESCHEDULED = 'Reschedule',
}

@Entity()
export class MentoringSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  sessionNumber: number;

  @Column({type: 'enum', enum: MentorshipStatus})
  status: MentorshipStatus;

  @Column()
  durationMinutes: number;

  @Column()
  mentorRating: number;

  @Column('simple-array')
  practicedSkills: string[];

  @Column()
  topics: string;

  @Column({ nullable: true })
  cancellationReason?: string;

  @Column({ nullable: true })
  rescheduleReason?: string;

  @ManyToOne(() => Mentor, (mentor) => mentor.mentoringSessions)
  mentor: Mentor;

  @ManyToOne(() => Mentee, (mentee) => mentee.mentoringSessions)
  mentee: Mentee;
}
