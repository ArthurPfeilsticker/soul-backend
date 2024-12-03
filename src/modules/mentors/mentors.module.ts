import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mentor } from '../../entities/mentor.entity';
import { MentorsService } from '../../services/mentors/mentors.service';
import { MentorsController } from '../../controllers/mentors/mentors.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Mentor])],
    providers: [MentorsService],
    controllers: [MentorsController],
    exports: [MentorsService],
})
export class MentorsModule {}
