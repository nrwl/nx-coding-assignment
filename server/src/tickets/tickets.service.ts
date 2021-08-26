import { Injectable } from '@nestjs/common';
import { Ticket } from '@acme/shared-models';
import { UsersService } from '../users/users.service';

@Injectable()
export class TicketsService {
  /*
   * In-memory storage so data is lost on server restart.
   */
  private storedTickets: Ticket[] = [
    {
      id: 1,
      description: 'Install a monitor arm',
      assigneeId: 1,
      completed: false,
    },
    {
      id: 2,
      description: 'Move the desk to the new location',
      assigneeId: 1,
      completed: false,
    },
  ];

  private nextId = 3;

  constructor(private usersService: UsersService) {}

  async tickets(): Promise<Ticket[]> {
    return this.storedTickets;
  }

  async ticket(id: number): Promise<Ticket | null> {
    return this.storedTickets.find((t) => t.id === id) ?? null;
  }

  async newTicket(payload: { description: string }): Promise<Ticket> {
    const newTicket: Ticket = {
      id: this.nextId++,
      description: payload.description,
      assigneeId: null,
      completed: false,
    };

    this.storedTickets.push(newTicket);

    return newTicket;
  }

  async assign(ticketId: number, userId: number): Promise<boolean> {
    const ticket = await this.ticket(ticketId);
    const user = await this.usersService.user(userId);

    if (ticket && user) {
      ticket.assigneeId = +userId;
      return true;
    } else {
      return false;
    }
  }

  async complete(ticketId: number, completed: boolean): Promise<boolean> {
    const ticket = await this.ticket(ticketId);
    if (ticket) {
      ticket.completed = completed;
      return true;
    } else {
      return false;
    }
  }
}
