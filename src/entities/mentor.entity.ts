import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mentor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  totalMentoringTime: number;

  @Column()
  level: number;

  @Column()
  experience: number;

  @Column()
  isLeader: boolean;
}
