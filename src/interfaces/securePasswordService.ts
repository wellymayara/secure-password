import Errors from 'src/enum/erros';

interface securePasswordService {
  verifyPassword: (passwod: string) => Set<Errors>;
}

export default securePasswordService;
