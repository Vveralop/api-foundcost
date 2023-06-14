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
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('')
  async createProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    const product = await this.productService.createProduct(createProductDto);

    return res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      message: 'Record Created',
      data: { RecordId: product._id },
    });
  }

  @Get('')
  async getProducts(@Res() res) {
    const product = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      message: 'Record Found',
      data: product,
    });
  }

  @Get('/:productId')
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
