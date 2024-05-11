export class Login {
  email: string = '';

  password: string = '';

  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class Register {
  name: string;
  email: string;
  image: File | null;
  phnumber: string;
  address: string;
  password: string;
  confirmPass: string;

  constructor() {
    this.name = '';
    this.email = '';
    this.image = null;

    this.phnumber = '';
    this.address = '';
    this.password = '';
    this.confirmPass = '';
  }
}
