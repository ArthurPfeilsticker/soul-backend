import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { MentoringSession } from './mentoring-session.entity';
import { Mentor } from './mentor.entity';

@Entity()
export class SubstituteMentor {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => MentoringSession, (session) => session.id)
  mentoringSession: MentoringSession;

  @ManyToOne(() => Mentor, (mentor) => mentor.id)
  originalMentor: Mentor;

  @ManyToOne(() => Mentor, (mentor) => mentor.id)
  substituteMentor: Mentor;

  @Column()
  reason: string;
}
