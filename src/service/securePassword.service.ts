import Errors from '../enum/erros';
import securePasswordService from 'src/interfaces/securePasswordService';

class SecurePasswordService implements securePasswordService {
  private errors = new Set<Errors>();

  private validateLength(passwod: string) {
    passwod.length <= 8 && this.errors.add(Errors.MIN_ERROR);
  }

  private validateSpecialCharacters(passwod: string) {
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    !passwod.match(specialCharacters) &&
      this.errors.add(Errors.SPECIAL_CHARACTERS_ERROR);
  }

  verifyPassword(password: string) {
    this.validateLength(password);
    this.validateSpecialCharacters(password);
    return this.errors;
  }
}

export default SecurePasswordService;
