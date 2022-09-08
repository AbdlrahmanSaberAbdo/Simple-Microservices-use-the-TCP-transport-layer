import { CreateUserEvent } from "./events/userCreated.event";
export declare class AppService {
    getHello(): string;
    handleUserCreated(data: CreateUserEvent): void;
}
