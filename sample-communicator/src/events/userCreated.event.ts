export class CreateUserEvent {
    constructor(public readonly email: string) {}
}

export interface UserEventTypeInterface {
    email: string;
}