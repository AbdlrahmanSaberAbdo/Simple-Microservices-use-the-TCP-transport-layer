import { AppService } from './app.service';
import { CreateUserEvent } from './events/userCreated.event';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    handleUserCreated(data: CreateUserEvent): Promise<void>;
}
