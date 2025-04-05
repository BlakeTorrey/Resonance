export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  emailUpdates: boolean;
}

// You need a domain level entity to be able to modify, update, create, view to the api, this is the state you always want your entity to be in.
