import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {CreateUserEvent, UserEventTypeInterface} from './events/userCreated.event';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  async handleUserCreated(data: CreateUserEvent) {
    this.appService.handleUserCreated(data);
  }
}
