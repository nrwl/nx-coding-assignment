import { Injectable } from '@nestjs/common';
import { User } from '@acme/shared-models';

@Injectable()
export class UsersService {
  /*
   * In-memory storage so data is lost on server restart.
   */
  private storedUsers: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Chris' },
    { id: 4, name: 'Daisy' },
    { id: 5, name: 'Ed' },
  ];

  async users(): Promise<User[]> {
    return this.storedUsers;
  }

  async user(id: number): Promise<User | null> {
    return this.storedUsers.find((user) => user.id === +id) ?? null;
  }
}
