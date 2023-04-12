import { Request, Response } from 'express';
import { ListCategoriesService } from '../../services/Category/ListCategoriesService';

class ListCategoryController {
	async handle(request: Request, response: Response) {
		const listCategoriesService = new ListCategoriesService();

		const categories = await listCategoriesService.execute();

		return response.json(categories);
	}
}

export { ListCategoryController };
