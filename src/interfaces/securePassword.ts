import Errors from 'src/enum/erros';

interface securePassword {
  verifyPassword: (passwod: string) => Set<Errors>;

  validateLength: (passwod: string) => boolean;
}

export default securePassword;
