import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [UsersController],
  imports: [
    ClientsModule.register([
      { name: 'COMMUNICATION', transport: Transport.TCP },
    ]),
  ],
  providers: [UsersService],
})
export class UsersModule {}
