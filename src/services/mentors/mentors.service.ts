import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NumericType, Repository } from 'typeorm';
import { Mentor } from 'src/entities/mentor.entity';

@Injectable()
export class MentorsService {
    constructor(
        @InjectRepository(Mentor)
        private readonly mentorRepository: Repository<Mentor>,
    ){}

    //creates new mentor
    async create(mentorData: Mentor): Promise<Mentor>{
        const mentor = this.mentorRepository.create(mentorData);
        return this.mentorRepository.save(mentor);
    }

    //gets all signed up mentors
    async findAll(): Promise<Mentor[]>{
        return this.mentorRepository.find();
    }

    //gets a mentor by his ID
    async findOne(id: number): Promise<Mentor>{
        const mentor = await this.mentorRepository.findOne({where: {id}});
        if(!mentor){
            throw new NotFoundException(`Mentor with especified ID ${id} not found`);
        }
        return mentor;
    }

    //updates a mentor searching by his ID
    async update(id: number, mentorData: Mentor): Promise<Mentor>{
        const mentor = await this.findOne(id);
        Object.assign(mentor, mentorData);
        return this.mentorRepository.save(mentor);
    }

    //deletes a mentor searching by his ID
    async remove(id: number): Promise<void>{
        const mentor = await this.findOne(id);
        await this.mentorRepository.remove(mentor);
    }
}
