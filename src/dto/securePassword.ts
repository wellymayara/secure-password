class securePassword {
  private password: string;

  constructor(password: string) {
    this.password = password;
  }

  getPassword() {
    return this.password;
  }

  setPassword(password: string) {
    this.password = password;
  }
}
