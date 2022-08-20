import { Controller, Get } from '@nestjs/common';
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
}
