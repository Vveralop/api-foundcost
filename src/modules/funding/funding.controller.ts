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
import { CreateFundingDto } from './dto/funding.dto';
import { FundingService } from './funding.service';

@Controller('Funding')
export class FundingController {
  constructor(private foundService: FundingService) {}

  @Post('')
  async createPost(@Res() res, @Body() createFundingDto: CreateFundingDto) {
    const found = await this.foundService.createFunding(createFundingDto);

    return res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: 'Record Created',
      data: { RecordId: found._id },
    });
  }
}
