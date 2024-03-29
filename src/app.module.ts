import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CoursesModule],
})
export class AppModule {}
