import Errors from '../enum/erros';
import securePassword from 'src/interfaces/securePassword';

class SecurePasswordService implements securePassword {
  private errors = new Set<Errors>();

  validateLength(passwod: string) {
    passwod.length >= 8 ? true : this.errors.add(Errors.MIN_ERROR);
    return false;
  }

  verifyPassword(password: string) {
    this.validateLength(password);
    return this.errors;
  }
}

export default SecurePasswordService;
