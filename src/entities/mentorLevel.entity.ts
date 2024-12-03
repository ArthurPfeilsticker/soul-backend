import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MentorLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  requirements: string;

  @Column()
  minYears: number;
}
