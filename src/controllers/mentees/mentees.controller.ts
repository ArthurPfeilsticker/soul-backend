import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { MenteesService } from '../../services/mentees/mentees.service';
import { CreateMenteeDto } from '../../dtos/mentee.dto';
import { Mentee } from '../../entities/mentee.entity';

@Controller('mentees')
export class MenteeController {
    constructor(private readonly menteesService: MenteesService) {}
  
    @Post()
    async create(@Body() createMenteeDto: CreateMenteeDto): Promise<Mentee> {
        return this.menteesService.create(createMenteeDto);
    }

    //gets all the signed up mentees
    @Get()
    async findAll(): Promise<Mentee[]>{
        return this.menteesService.getAll();
    }

    //gets a mentor by his ID
    @Get(':id')
    async getMentorById(@Param('id') id: number): Promise<Mentee>{
        return this.menteesService.getMenteeById(id);
    }
}
