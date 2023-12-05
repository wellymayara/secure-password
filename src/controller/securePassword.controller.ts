import { Body, Controller, Post, Res } from '@nestjs/common';
import SecurePassword from '../../src/dto/securePassword';
import SecurePasswordService from '../service/securePassword.service';
import { Response } from 'express';

@Controller('/validate-password')
class SecurePasswordController {
  constructor(private securePasswordService: SecurePasswordService) {}

  @Post()
  securePassword(@Body() { password }: SecurePassword, @Res() res: Response) {
    const errors = this.securePasswordService.validatePassword(password);

    if (errors.size > 0) {
      return res.status(400).json({ errors: Array.from(errors) });
    }

    return res.status(204).send();
  }
}

export default SecurePasswordController;
