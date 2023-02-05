export interface RequestDataUserCreate {
  body: {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
  }
}

export interface RequestDataUserGetById {
  params: {
    id: number;
  }
}

export interface RequestDataUserUpdate {
  params: {
    id: number;
  }
  body: {
    firstName?: string;
    middleName?: string;
    lastName?: string;
    email?: string;
  }
}

export interface RequestDataUserDelete {
  params: {
    id: number;
  }
}

export interface RequestDataUserGetByEmail {
  body: {
    email: string;
  }
}
