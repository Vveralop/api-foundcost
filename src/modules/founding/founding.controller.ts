import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CreateFoundingDto } from './dto/founding.dto';
import { FoundingService } from './founding.service';

@Controller('founding')
export class FoundingController {
  constructor(private foundService: FoundingService) {}

  @Post('')
  async createPost(@Res() res, @Body() createFoundingDto: CreateFoundingDto) {
    const found = this.foundService.createFounding(createFoundingDto);
    return res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      status: 'Created',
      message: found,
    });
  }
}
