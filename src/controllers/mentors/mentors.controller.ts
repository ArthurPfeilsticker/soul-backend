import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MentorsService } from '../../services/mentors/mentors.service';
import { Mentor } from '../../entities/mentor.entity';
import { CreateMentorDto } from '../../dtos/mentor.dto';

@Controller('mentors')
export class MentorsController {
    constructor(private readonly mentorService: MentorsService){}

    //creates a new mentor
    @Post()
    async create(@Body() CreateMentorDto: CreateMentorDto): Promise<Mentor>{
        return this.mentorService.create(CreateMentorDto);
    }

    //gets all the signed up mentors
    @Get()
    async findAll(): Promise<Mentor[]>{
        return this.mentorService.getAll();
    }

    //gets a mentor by his ID
    @Get(':id')
    async getMentorById(@Param('id') id: number): Promise<Mentor>{
        return this.mentorService.getMentorById(id);
    }

    //updates a mentor searching by his ID
    @Put(':id')
    async update(@Param('id') id: number, @Body() mentorData: Mentor): Promise<Mentor>{
        return this.mentorService.update(id, mentorData);
    }

    //deletes a mentor searching by his ID
    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void>{
        return this.mentorService.remove(id);
    }
}
