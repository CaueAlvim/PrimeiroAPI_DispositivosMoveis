import { Request, Response } from 'express';
import { CreateProductService } from '../../services/Product/CreateProductService';

class CreateProductController {
	async handle(request: Request, response: Response) {
		const { name, description, price, url } = request.body;

		const createProductService = new CreateProductService();

		const product = await createProductService.execute({
			name,
			description,
			price,
			url,
		});

		return response.json(product);
	}
}

export { CreateProductController };
