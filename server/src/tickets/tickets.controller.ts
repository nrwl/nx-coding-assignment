import {
  NotFoundException,
  UnprocessableEntityException,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Put,
  Post,
  Param,
  Delete,
  Body,
  HttpCode,
} from '@nestjs/common';
import { randomDelay } from '../utils/random-delay';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private ticketsService: TicketsService) {}

  @Get()
  async getTickets() {
    await randomDelay();
    return this.ticketsService.tickets();
  }

  @Get()
  async getTicket(id: number) {
    await randomDelay();
    const ticket = await this.ticketsService.ticket(id);
    if (ticket) return ticket;
    throw new NotFoundException();
  }

  @Post()
  async createTicket(@Body() createDto: { description: string }) {
    await randomDelay();
    return this.ticketsService.newTicket(createDto);
  }

  @Put(':ticketId/assign/:userId')
  @HttpCode(204)
  async assignTicket(
    @Param('ticketId') ticketId: string,
    @Param('userId') userId: string
  ) {
    await randomDelay();
    const success = await this.ticketsService.assign(
      Number(ticketId),
      Number(userId)
    );
    if (!success) throw new UnprocessableEntityException();
  }

  @Put(':id/complete')
  @HttpCode(204)
  async markAsComplete(@Param('id') ticketId: string) {
    await randomDelay();
    const success = await this.ticketsService.complete(Number(ticketId), true);
    if (!success) throw new UnprocessableEntityException();
  }

  @Delete(':id/complete')
  @HttpCode(204)
  async markAsIncomplete(@Param('id') ticketId: string) {
    await randomDelay();
    const success = await this.ticketsService.complete(Number(ticketId), false);
    if (!success) throw new UnprocessableEntityException();
  }
}
