import { Module } from '@nestjs/common';

import { UsersModule } from '../users/users.module';
import { TicketsModule } from '../tickets/tickets.module';

@Module({
  imports: [UsersModule, TicketsModule],
})
export class AppModule {}
