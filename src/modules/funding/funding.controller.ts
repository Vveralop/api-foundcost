import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Res,
  HttpStatus,
  Param,
} from '@nestjs/common';
import {
  CreateFundingDto,
  FindById,
  UpdateFundingDto,
} from './dto/funding.dto';
import { FundingService } from './funding.service';

@Controller('Funding')
export class FundingController {
  constructor(private fundService: FundingService) {}

  @Post('')
  async createFunding(@Res() res, @Body() createFundingDto: CreateFundingDto) {
    const fund = await this.fundService.createFunding(createFundingDto);

    return res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: 'Record Created',
      data: { RecordId: fund._id },
    });
  }

  @Get('')
  async getFundings(@Res() res) {
    const funds = await this.fundService.getFundings();
    return res.status(HttpStatus.OK).json({
      code: HttpStatus.CREATED,
      message: 'Record Found',
      data: funds,
    });
  }

  @Get('/:fundId')
  async getFunding(@Res() res, @Param('fundId') fundId: FindById) {
    try {
      const fund = await this.fundService.getFunding(fundId);
      if (fund)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.CREATED,
          message: 'Records Found',
          data: fund,
        });
      else
        return res.status(HttpStatus.NOT_FOUND).json({
          code: HttpStatus.NOT_FOUND,
          message: 'Record Not Found for Id Provided. Please Enter a Valid ID.',
          data: '',
        });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e.message,
        data: '',
      });
    }
  }

  @Delete('/:fundId')
  async deleteFund(@Res() res, @Param('fundId') fundId: FindById) {
    try {
      const fund = await this.fundService.deleteFunding(fundId);
      if (fund)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.CREATED,
          message: 'Record Deleted',
          data: fund,
        });
      else
        return res.status(HttpStatus.NOT_FOUND).json({
          code: HttpStatus.NOT_FOUND,
          message: 'Record Not Found for Id Provided. Please Enter a Valid ID.',
          data: '',
        });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e.message,
        data: '',
      });
    }
  }

  @Put('/:fundId')
  async updateFund(
    @Res() res,
    @Body() updateFundingDto: UpdateFundingDto,
    @Param('fundId') fundId: FindById,
  ) {
    try {
      updateFundingDto.updatedAt = new Date();
      const fund = await this.fundService.updateFunding(
        fundId,
        updateFundingDto,
      );
      if (fund)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.CREATED,
          message: 'Record Updated',
          data: fund,
        });
      else
        return res.status(HttpStatus.NOT_FOUND).json({
          code: HttpStatus.NOT_FOUND,
          message: 'Record Not Found for Id Provided. Please Enter a Valid ID.',
          data: '',
        });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e.message,
        data: '',
      });
    }
  }
}
