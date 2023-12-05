import Errors from '../../enum/erros';
import SecurePasswordService from '../securePassword.service';

describe('Secure Password Service Test', () => {
  const sut = new SecurePasswordService();

  it('Should return error if the length of the password is less than 9 characters', () => {
    const password = '';
    const errorMessage = sut.validatePassword(password);
    expect(errorMessage).toContain(Errors.MIN_ERROR);
  });

  it('Should return error if the password not contains at least one special character', () => {
    const password = 'loremipsum';
    const errorMessage = sut.validatePassword(password);
    expect(errorMessage).toContain(Errors.SPECIAL_CHARACTERS_ERROR);
  });

  it('Should return error if the password not contains at least one number', () => {
    const password = 'loremipsum';
    const errorMessage = sut.validatePassword(password);
    expect(errorMessage).toContain(Errors.NUMBERS_ERROR);
  });

  it('Should return error if the password not contains at least one capital letter', () => {
    const password = 'loremipsum';
    const errorMessage = sut.validatePassword(password);
    expect(errorMessage).toContain(Errors.NUMBERS_ERROR);
  });

  it('Should return error if the password not contains at least one lower case letter', () => {
    const password = '12345678';
    const errorMessage = sut.validatePassword(password);
    expect(errorMessage).toContain(Errors.NUMBERS_ERROR);
  });
});
