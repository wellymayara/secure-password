class SecurePassword {
  private _password: string;

  constructor(password: string) {
    this._password = password;
  }

  get password() {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }
}

export default SecurePassword;
