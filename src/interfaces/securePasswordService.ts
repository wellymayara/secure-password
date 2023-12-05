import Errors from 'src/enum/erros';

interface ISecurePasswordService {
  validatePassword: (passwod: string) => Set<Errors>;
}

export default ISecurePasswordService;
