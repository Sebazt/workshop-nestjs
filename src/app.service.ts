import { Injectable } from '@nestjs/common';
import { Iresponse } from './app.controller';
import { AppConfigService } from './config/app/config.service';

@Injectable()
export class AppService {
  constructor(private readonly appConfig: AppConfigService) {}

  getHello(): Iresponse {
    return {
      appName: this.appConfig.name,
      appUrl: this.appConfig.url,
      appPort: this.appConfig.port,
    };
  }

  getHi():string{
    return `Hola mi nombre es Gohan y esta es mi PetShop`
  }

  /* async getAllUsers(): Promise<User[]>{
    return await this.userRepo.find()
  }

  async getUser(userId): Promise<User>{
    return await this.userRepo.findOne(userId)
  } */
}


