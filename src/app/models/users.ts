export class Users {
  id: string;
  name: string;
  email: string;
  password: string;
  school_id: string;
  refNum: string;
  
  constructor(id: string, name: string, email: string, password: string, school_id: string, refNum: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.school_id = school_id;
    this.refNum = refNum;
  }
}