import { ApiBody, ApiOperation, ApiResponse, ApiTags, ApiParam } from '@nestjs/swagger';
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
@ApiTags('Funding')
export class FundingController {
  constructor(private fundService: FundingService) { }

  @Post('')
  @ApiOperation({
    summary: 'Create Endpoint for Cost of Funds parameters',
  })
  @ApiBody({
    type: CreateFundingDto,
  })
  @ApiResponse({ status: 201, description: 'When the record is created' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async createFunding(@Res() res, @Body() createFundingDto: CreateFundingDto) {
    try {
      const fund = await this.fundService.createFunding(createFundingDto);

      return res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        message: 'Record Created',
        data: { RecordId: fund._id },
      });
    } catch (e) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e.message,
        data: '',
      });
    }
  }

  @Get('')
  @ApiOperation({
    summary: 'Returns list of Cost of Funds parameters',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async getFundings(@Res() res) {
    try {
      const funds = await this.fundService.getFundings();
      if (funds)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          message: 'Records Found',
          data: funds,
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

  @Get('/:fundId')
  @ApiOperation({
    summary: 'Returns some Cost of Found parameter with its ID',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async getFunding(@Res() res, @Param('fundId') fundId: FindById) {
    try {
      const fund = await this.fundService.getFunding(fundId);
      if (fund)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
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
  @ApiOperation({
    summary: 'Delete some parameter with its ID',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async deleteFund(@Res() res, @Param('fundId') fundId: FindById) {
    try {
      const fund = await this.fundService.deleteFunding(fundId);
      if (fund)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
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
  @ApiOperation({
    summary: 'Update some parameter with its ID',
  })
  @ApiBody({
    type: CreateFundingDto,
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
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
          code: HttpStatus.OK,
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
