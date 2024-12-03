import { Controller, Post, Body } from '@nestjs/common';
import { MentoringSessionService } from '../../services/mentoring-session/mentoring-session.service';
import { MentoringSession } from '../../entities/mentoring-session.entity';
import { CreateMentoringSessionDto } from '../../dtos/mentoring-session.dto';

@Controller('mentoring-session')
export class MentoringSessionController {
    constructor(private readonly mentoringSessionService: MentoringSessionService){}

    @Post()
    async create(@Body() mentoringSessionData: MentoringSession): Promise <MentoringSession>{
        return this.mentoringSessionService.create(mentoringSessionData);
    }
}
