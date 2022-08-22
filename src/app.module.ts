import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/app/config.module';
import { TypeOrmConfigModule } from './config/typeorm/typeorm.module';

@Module({
  imports: [
    TypeOrmConfigModule,
    TypeOrmModule.forFeature([/* User */]),
    AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
