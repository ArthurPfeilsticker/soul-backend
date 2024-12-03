import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { MentoringSession } from './mentoring-session.entity';
import { MentorLevel } from './mentorLevel.entity';

@Entity()
export class Mentor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', default: 0 })
  totalMentoringMinutes: number;

  @Column({ type: 'int', default: 1 })
  level: number;

  @Column({ type: 'int', default: 0 })
  experience: number;

  @Column({type: 'boolean', default: false})
  isLeader: boolean;

  @OneToMany(() => MentoringSession, (session) => session.mentor)
  mentoringSessions: MentoringSession[];

  @ManyToOne(() => MentorLevel, (level) => level.mentors)
  levelInfo: MentorLevel;
}
