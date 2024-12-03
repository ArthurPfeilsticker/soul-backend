import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mentor } from '../../entities/mentor.entity';
import { MentorsService } from 'src/services/mentors/mentors.service';
import { MentorsController } from 'src/controllers/mentors/mentors.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Mentor])],
    providers: [MentorsService],
    controllers: [MentorsController],
    exports: [MentorsService],
})
export class MentorsModule {}
