import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";
import { Lookup } from "../schema/lookup.schema";
import { LookupService } from "./lookup.service";
import { CreateLookupDto } from "../dto/create-lookup.dto";

@Controller('lookups')
export class LookupController {
    constructor(private readonly lookupService: LookupService){}

    @Post()
    async createLookup(@Res() response, @Body() createLookupDto: CreateLookupDto) {
        const newLookup = await this.lookupService.create(createLookupDto);
        return response.status(HttpStatus.CREATED).json({
            newLookup
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const lookups = await this.lookupService.readAll();
        return response.status(HttpStatus.OK).json({
            lookups
        })
    }

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const lookup = await this.lookupService.readById(id);
        return response.status(HttpStatus.OK).json({
            lookup
        })
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() lookup: Lookup) {
        const updatedLookup = await this.lookupService.update(id, lookup);
        return response.status(HttpStatus.OK).json({
            updatedLookup
        })
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        const deletedLookup = await this.lookupService.delete(id);
        return response.status(HttpStatus.OK).json({
            deletedLookup
        })
    }
}