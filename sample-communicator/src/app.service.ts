import { Injectable } from '@nestjs/common';
import {CreateUserEvent, UserEventTypeInterface} from "./events/userCreated.event";

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handlerUserCreated - COMMUNICATIONS', data);
  }
}
