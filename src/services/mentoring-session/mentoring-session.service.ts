import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMentoringSessionDto } from 'src/dtos/mentoring-session.dto';
import { Mentee } from 'src/entities/mentee.entity';
import { Mentor } from 'src/entities/mentor.entity';
import { MentoringSession } from 'src/entities/mentoring-session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MentoringSessionService {
    constructor(
        @InjectRepository(MentoringSession)
        private mentoringSessionRepository: Repository<MentoringSession>,
        @InjectRepository(Mentor)
        private mentorRepository: Repository<Mentor>,
        @InjectRepository(Mentee)
        private menteeRepository: Repository<Mentee>,
    ){}

    async create(mentoringSessionData: MentoringSession): Promise<MentoringSession> {
        const mentor = await this.mentorRepository.findOne({where: {id: mentoringSessionData.mentor.id}});
        const mentee = await this.menteeRepository.findOne({where: {id: mentoringSessionData.mentee.id}});

        if (!mentor) {
            throw new Error(`Mentor with ID ${mentoringSessionData.mentor.id} not found.`);
        }

        if (!mentee) {
            throw new Error(`Mentee with ID ${mentoringSessionData.mentee.id} not found.`);
        }
        const mentoringSession = this.mentoringSessionRepository.create(mentoringSessionData);
        mentoringSession.mentor = mentor;
        mentoringSession.mentee = mentee;
        return this.mentoringSessionRepository.save(mentoringSession);
      }
}
