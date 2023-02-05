import type Users from '.';

export interface ResponseDataUsersGet {
  message: string;
  data: {
    users: Users;
  }
}
