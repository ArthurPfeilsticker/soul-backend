import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MentoringSession {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  totalMentoringTime: number; //minutes

  @Column()
  level: number;

  @Column()
  experience: number;

  @Column()
  isLeader: boolean;
}
