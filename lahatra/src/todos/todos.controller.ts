import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './todos.service';
import { Etudiant } from './interfaces/todos.interface';

@Controller('lahatra')
export class SaveData {
	constructor(private readonly saveData: ProductsService) {}

	@Get()
	async getData(): Promise<Etudiant[]> {
		const students = await this.saveData.getStudents();
		return students;
	}

	@Post()
	insertData(@Body() newData) {
		/*console.log(newTodo);*/
		this.saveData.insertStudents(newData);
	}
}

// @Controller('anjara')
// export class DataByid {
// 	constructor(private readonly getById: ProductsService) {}

// 	@Get()
// 	async 
// }
