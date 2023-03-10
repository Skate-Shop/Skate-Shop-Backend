import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product, ProductDocument } from "../schema/product.schema";
import { CreateProductDto } from "../dto/create-product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}
    
    async create(createProductDto: CreateProductDto): Promise<ProductDocument> {
        const newProduct = new this.productModel(createProductDto);
        return newProduct.save();
    }

    async readAll(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    async readById(id): Promise<Product> {
        return await this.productModel.findById(id).exec();
    }

    async update(id, Product: Product): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, Product, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.productModel.findByIdAndRemove(id);
    }
}