import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Mentor } from './mentor.entity';

@Entity()
export class MentorLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('simple-array')
  requirements: string[];

  @Column()
  minYears: number;

  @OneToMany(() => Mentor, (mentor) => mentor.levelInfo)
  mentors: Mentor[];
}
