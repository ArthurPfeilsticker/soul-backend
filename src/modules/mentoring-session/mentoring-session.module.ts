import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MentoringSessionController } from 'src/controllers/mentoring-session/mentoring-session.controller';
import { Mentee } from 'src/entities/mentee.entity';
import { Mentor } from 'src/entities/mentor.entity';
import { MentoringSession } from 'src/entities/mentoring-session.entity';
import { MentoringSessionService } from 'src/services/mentoring-session/mentoring-session.service';

@Module({
    imports: [TypeOrmModule.forFeature([MentoringSession]), TypeOrmModule.forFeature([Mentee]), TypeOrmModule.forFeature([Mentor])],
    providers: [MentoringSessionService],
    controllers: [MentoringSessionController],
    exports: [MentoringSessionService],
})
export class MentoringSessionModule {}
