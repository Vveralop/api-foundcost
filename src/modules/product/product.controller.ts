import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  CreateProductDto,
  ProductById,
  UpdateProductDto,
} from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('')
  @ApiOperation({
    summary: 'Create Endpoint',
  })
  @ApiBody({
    type: CreateProductDto,
  })
  @ApiResponse({ status: 201, description: 'When the record is created' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    const product = await this.productService.createProduct(createProductDto);

    return res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: 'Record Created',
      data: { RecordId: product._id },
    });
  }

  @Get('')
  @ApiOperation({
    summary: 'Returns Products List',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async getProducts(@Res() res) {
    try {
      const product = await this.productService.getProducts();
      if (product)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          message: 'Records Found',
          data: product,
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

  @Get('/:productId')
  @ApiOperation({
    summary: 'Returns Any Product with ID',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async getFunding(@Res() res, @Param('productId') productId: ProductById) {
    try {
      const product = await this.productService.getProduct(productId);
      if (product)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          message: 'Records Found',
          data: product,
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

  @Delete('/:productId')
  @ApiOperation({
    summary: 'Delete Product by ID',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async deleteProduct(@Res() res, @Param('productId') productId: ProductById) {
    try {
      const product = await this.productService.deleteProduct(productId);
      if (product)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          message: 'Record Deleted',
          data: product,
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

  @Put('/:productId')
  @ApiBody({
    type: CreateProductDto,
  })
  @ApiOperation({
    summary: 'Update Products by ID',
  })
  @ApiResponse({ status: 200, description: 'when returns a record' })
  @ApiResponse({ status: 404, description: 'when record not found' })
  @ApiResponse({ status: 500, description: "500's when another error occurs." })
  async updateProduct(
    @Res() res,
    @Body() updateProductDto: UpdateProductDto,
    @Param('productId') productId: ProductById,
  ) {
    try {
      const product = await this.productService.updateProduct(
        productId,
        updateProductDto,
      );
      if (product)
        return res.status(HttpStatus.OK).json({
          code: HttpStatus.OK,
          message: 'Record Updated',
          data: product,
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
