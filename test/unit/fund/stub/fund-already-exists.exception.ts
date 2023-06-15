import { HttpException, HttpStatus } from '@nestjs/common';

export class FundAlreadyExists extends HttpException {
  constructor() {
    super('Funds already exists!', HttpStatus.BAD_REQUEST);
  }
}
