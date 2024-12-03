import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mentee } from '../../entities/mentee.entity';
import { CreateMenteeDto } from '../../dtos/mentee.dto';
import { Mentor } from '../../entities/mentor.entity';

@Injectable()
export class MenteesService {
    constructor(
        @InjectRepository(Mentee)
        private menteeRepository: Repository<Mentee>,
        @InjectRepository(Mentor)
        private mentorRepository: Repository<Mentor>,
    ){}

    async create(createMenteeDto: CreateMenteeDto): Promise<Mentee> {
        const mentor = await this.mentorRepository.findOne({where: {id: createMenteeDto.currentMentorId}});
        const mentee = this.menteeRepository.create(createMenteeDto);
        mentee.currentMentor = mentor; // Associates mentor to mentee
        return this.menteeRepository.save(mentee);
    }

    //gets all signed up mentees
    async getAll(): Promise<Mentee[]>{
        return this.menteeRepository.find({
            relations: ['currentMentor'],
        });
    }

    //gets a mentor by his ID
    async getMenteeById(id: number): Promise<Mentee>{
        const mentee = await this.menteeRepository.findOne({
            where: {id},
            relations: ['currentMentor'],
        },);
        if(!mentee){
            throw new NotFoundException(`Mentor with especified ID ${id} not found`);
        }
        return mentee;
    }
}
