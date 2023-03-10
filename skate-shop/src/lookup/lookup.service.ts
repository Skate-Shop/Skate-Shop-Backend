import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Lookup, LookupDocument } from "../schema/lookup.schema";
import { CreateLookupDto } from "../dto/create-lookup.dto";

@Injectable()
export class LookupService {
    constructor(@InjectModel(Lookup.name) private lookupModel: Model<LookupDocument>) {}
    
    async create(createLookupDto: CreateLookupDto): Promise<LookupDocument> {
        const newLookup = new this.lookupModel(createLookupDto);
        return newLookup.save();
    }

    async readAll(): Promise<Lookup[]> {
        return await this.lookupModel.find().exec();
    }

    async readById(id): Promise<Lookup> {
        return await this.lookupModel.findById(id).exec();
    }

    async update(id, Lookup: Lookup): Promise<Lookup> {
        return await this.lookupModel.findByIdAndUpdate(id, Lookup, {new: true})
    }

    async delete(id): Promise<any> {
        return await this.lookupModel.findByIdAndRemove(id);
    }
}