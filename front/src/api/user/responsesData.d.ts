import type User from '.';

export interface ResponseDataUserCreate {
  message: string;
  data: {
    user: User;
  }
}

export interface ResponseDataUserGetById {
  message: string;
  data: {
    user: User;
  }
}

export interface ResponseDataUserUpdate {
  message: string;
  data: {
    user: User;
  }
}

export interface ResponseDataUserDelete {
  message: string;
  data: {
    user: User;
  }
}

export interface ResponseDataUserGetByEmail {
  message: string;
  data: {
    user: User;
  }
}
