import { Module } from '@nestjs/common';
import { MongooseModule} from '@nestjs/mongoose';

import { SaveData } from './todos.controller';
import { ProductsService} from './todos.service';
import { ProductSchema } from './interfaces/todos.interface';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])],
  controllers: [SaveData],
  providers: [ProductsService]
})
export class TodosModule {}
