import Errors from '../enum/erros';
import SecurePasswordService from './securePassword.service';

describe('Secure Password Service Test', () => {
  const sut = new SecurePasswordService();

  it('Should return error if the length of the password is less than 9 characters', () => {
    const password = '';
    const errorMessage = sut.verifyPassword(password);
    expect(errorMessage).toContain(Errors.MIN_ERROR);
  });

  it('Should return error if the password not contains at least one special character', () => {
    const password = 'loremipsum';
    const errorMessage = sut.verifyPassword(password);
    expect(errorMessage).toContain(Errors.SPECIAL_CHARACTERS_ERROR);
  });
});
