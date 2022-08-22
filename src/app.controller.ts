import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

export interface Iresponse{
  appName: string,
  appUrl:string,
  appPort: number,
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Iresponse {
    return this.appService.getHello();
  }

  @Get('user')
  getHi(): string {
    return this.appService.getHi();
  }

  /* @Get('users/')
  getAllUsers(): Promise<User[]> {
    return this.appService.getAllUsers();
  }

  @Get('users/:userId')
  getUser(@Param('userId') userId: number): Promise<User> {
    return this.appService.getUser(userId);
  } */
}
