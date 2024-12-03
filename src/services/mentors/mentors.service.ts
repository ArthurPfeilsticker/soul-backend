import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mentor } from '../../entities/mentor.entity';
import { CreateMentorDto } from '../../dtos/mentor.dto';

@Injectable()
export class MentorsService {
    constructor(
        @InjectRepository(Mentor)
        private readonly mentorRepository: Repository<Mentor>,
    ){}

    //creates new mentor
    async create(createMentorDto: CreateMentorDto): Promise<Mentor>{
        const mentor = this.mentorRepository.create(createMentorDto);
        return this.mentorRepository.save(mentor);
    }

    //gets all signed up mentors
    async getAll(): Promise<Mentor[]>{
        return this.mentorRepository.find();
    }

    //gets a mentor by his ID
    async getMentorById(id: number): Promise<Mentor>{
        const mentor = await this.mentorRepository.findOne({
            where: {id},
        });
        if(!mentor){
            throw new NotFoundException(`Mentor with especified ID ${id} not found`);
        }
        return mentor;
    }

    //updates a mentor searching by his ID
    async update(id: number, mentorData: Mentor): Promise<Mentor>{
        const mentor = await this.getMentorById(id);
        Object.assign(mentor, mentorData);
        return this.mentorRepository.save(mentor);
    }

    //deletes a mentor searching by his ID
    async remove(id: number): Promise<void>{
        const mentor = await this.getMentorById(id);
        await this.mentorRepository.remove(mentor);
    }
}
