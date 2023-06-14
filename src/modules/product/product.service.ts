import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import {
  CreateProductDto,
  UpdateProductDto,
  ProductById,
} from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async getProduct(productId: ProductById): Promise<Product> {
    const product = await this.productModel.findById(productId);
    return product;
  }

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = new this.productModel(createProductDto);
    return await product.save();
  }

  async deleteProduct(productId: ProductById): Promise<Product> {
    const product = await this.productModel.findByIdAndDelete(productId);
    return product;
  }

  async updateProduct(
    productId: ProductById,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const fund = await this.productModel.findByIdAndUpdate(
      productId,
      updateProductDto,
      { new: true },
    );
    return fund;
  }
}
