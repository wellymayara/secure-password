import { Injectable } from '@nestjs/common';
import Errors from '../enum/erros';
import ISecurePasswordService from 'src/interfaces/securePasswordService';

@Injectable()
class SecurePasswordService implements ISecurePasswordService {
  private readonly errors = new Set<Errors>();
  private readonly passwordMinLenght = 8;

  private validateLength(password: string) {
    if (password.length <= this.passwordMinLenght) {
      this.errors.add(Errors.MIN_ERROR);
    }
  }

  private validateSpecialCharacters(password: string) {
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    !password.match(specialCharacters) &&
      this.errors.add(Errors.SPECIAL_CHARACTERS_ERROR);
  }

  private validateNumbers(password: string) {
    if (!password.match(/\d/)) {
      this.errors.add(Errors.NUMBERS_ERROR);
    }
  }

  private validateLowerCase(password: string) {
    if (!password.match(/[a-z]/)) {
      this.errors.add(Errors.LOWER_CASE_ERROR);
    }
  }

  private validateUpperCase(password: string) {
    if (!password.match(/[A-Z]/)) {
      this.errors.add(Errors.UPPER_CASE_ERROR);
    }
  }

  validatePassword(password: string) {
    this.validateLength(password);
    this.validateSpecialCharacters(password);
    this.validateNumbers(password);
    this.validateLowerCase(password);
    this.validateUpperCase(password);

    return this.errors;
  }
}

export default SecurePasswordService;
