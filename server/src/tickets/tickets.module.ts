import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { UsersModule } from '../users/users.module';
import { TicketsController } from './tickets.controller';

@Module({
  imports: [UsersModule],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
