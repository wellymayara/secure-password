import { Test, TestingModule } from '@nestjs/testing';
import { Response } from 'express';
import SecurePasswordController from '../securePassword.controller';
import SecurePasswordService from '../../service/securePassword.service';
import Errors from '../../enum/erros';
import SecurePassword from '../../dto/securePassword';

describe('SecurePasswordController', () => {
  let controller: SecurePasswordController;
  let securePasswordService: SecurePasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecurePasswordController],
      providers: [SecurePasswordService],
    }).compile();

    controller = module.get<SecurePasswordController>(SecurePasswordController);
    securePasswordService = module.get<SecurePasswordService>(
      SecurePasswordService,
    );
  });

  describe('securePassword', () => {
    it('should return 204 for a valid password', async () => {
      jest
        .spyOn(securePasswordService, 'validatePassword')
        .mockReturnValue(new Set());

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      } as unknown as Response;

      const requestBody = { password: 'validPa$$w0rd' } as SecurePassword;

      await controller.securePassword(requestBody, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.json).not.toHaveBeenCalled();
      expect(mockResponse.send).toHaveBeenCalled();
    });

    it('should return 400 for an invalid password', async () => {
      jest
        .spyOn(securePasswordService, 'validatePassword')
        .mockReturnValue(new Set([Errors.MIN_ERROR]));

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
        send: jest.fn(),
      } as unknown as Response;

      const requestBody = { password: 'invalidPassword' } as SecurePassword;

      await controller.securePassword(requestBody, mockResponse);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({
        errors: [Errors.MIN_ERROR],
      });
      expect(mockResponse.send).not.toHaveBeenCalled();
    });
  });
});
