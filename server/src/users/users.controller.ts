import { Controller, Get, NotFoundException, Param, ParseIntPipe } from '@nestjs/common';
import { randomDelay } from '../utils/random-delay';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers() {
    return this.usersService.users();
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    await randomDelay();
    const user = await this.usersService.user(id);
    if (user) return user;
    throw new NotFoundException();
  }
}
