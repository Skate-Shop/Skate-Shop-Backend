import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Product } from "../schema/product.schema";
import { ProductService } from "./product.service";
import { CreateProductDto } from "../dto/create-product.dto";

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Post()
    async createProduct(@Res() response, @Body() createProductDto: CreateProductDto) {
        const newProduct = await this.productService.create(createProductDto);
        return response.status(HttpStatus.CREATED).json({
            newProduct
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const products = await this.productService.readAll();
        return response.status(HttpStatus.OK).json({
            products
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const product = await this.productService.readById(id);
        return response.status(HttpStatus.OK).json({
            product
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() product: Product) {
        const updatedProduct = await this.productService.update(id, product);
        return response.status(HttpStatus.OK).json({
            updatedProduct
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedProduct = await this.productService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedProduct
        })
    }
}