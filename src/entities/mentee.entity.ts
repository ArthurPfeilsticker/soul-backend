import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Mentee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  mentoringSessionsAttended: number;

}
