import Errors from 'src/enum/erros';

interface securePassword {
  verifyPassword: (passwod: string) => Set<Errors>;

  validateLength: (passwod: string) => void;

  validateSpecialCharacters: (passwod: string) => void;
}

export default securePassword;
