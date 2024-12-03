import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMentoringSessionDto } from '../../dtos/mentoring-session.dto';
import { Mentee } from '../../entities/mentee.entity';
import { Mentor } from '../../entities/mentor.entity';
import { MentoringSession } from '../../entities/mentoring-session.entity';

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
