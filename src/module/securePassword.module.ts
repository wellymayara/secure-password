import { Module } from '@nestjs/common';
import SecurePasswordService from '../service/securePassword.service';
import SecurePasswordController from '../controller/securePassword.controller';

@Module({
  imports: [],
  controllers: [SecurePasswordController],
  providers: [SecurePasswordService],
})
export class SecurePasswordModule {}
