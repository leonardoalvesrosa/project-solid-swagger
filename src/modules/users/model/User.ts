/* eslint-disable prettier/prettier */
import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin?: boolean;
  created_at: Date;
  updated_at?: Date;

  constructor() {
    this.id = uuidV4();
    // this.id = 'teste';
    if (!this.admin) {
      this.admin = false;
    }
  }
}

export { User };
