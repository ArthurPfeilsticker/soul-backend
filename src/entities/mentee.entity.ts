import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { MentoringSession } from './mentoring-session.entity';
import { Mentor } from './mentor.entity';

@Entity()
export class Mentee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', default: 0 })
  mentoringSessionsAttended: number;

  @ManyToOne(() => Mentor, (mentor) => mentor.mentoringSessions)
  currentMentor: Mentor;  //foreign key to mentor

  @OneToMany(() => MentoringSession, (session) => session.mentee)
  mentoringSessions: MentoringSession[];

}
