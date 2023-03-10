import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';
import { Lookup, LookupSchema } from '../schema/lookup.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Lookup.name, schema: LookupSchema}])],
  controllers: [LookupController],
  providers: [LookupService],
})
export class LookupModule {}