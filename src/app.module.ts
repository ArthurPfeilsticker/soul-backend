import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { MentorsModule } from './modules/mentors/mentors.module';
import { ConfigModule } from '@nestjs/config';
import { MenteesModule } from './modules/mentees/mentees.module';
import { MentoringSessionModule } from './modules/mentoring-session/mentoring-session.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.PG_HOST,
      port: parseInt(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    MentorsModule,
    MenteesModule,
    MentoringSessionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
