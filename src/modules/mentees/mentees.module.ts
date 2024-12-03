import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MenteeController } from '../../controllers/mentees/mentees.controller';
import { Mentee } from '../../entities/mentee.entity';
import { MenteesService } from '../../services/mentees/mentees.service';
import { Mentor } from '../../entities/mentor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Mentee]), TypeOrmModule.forFeature([Mentor])],
    providers: [MenteesService],
    controllers: [MenteeController],
    exports: [MenteesService],
})
export class MenteesModule {}
