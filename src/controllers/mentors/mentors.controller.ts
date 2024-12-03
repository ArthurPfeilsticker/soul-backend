import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MentorsService } from 'src/services/mentors/mentors.service';
import { Mentor } from '../../entities/mentor.entity';
//import { MentorsModule } from 'src/modules/mentors/mentors.module';

@Controller('mentors')
export class MentorsController {
    constructor(private readonly mentorService: MentorsService){}

    //creates a new mentor
    @Post()
    async create(@Body() mentorData: Mentor): Promise<Mentor>{
        return this.mentorService.create(mentorData);
    }

    //gets all the signed up mentors
    @Get()
    async findAll(): Promise<Mentor[]>{
        return this.mentorService.findAll();
    }

    //gets a mentor by his ID
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Mentor>{
        return this.mentorService.findOne(id);
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
