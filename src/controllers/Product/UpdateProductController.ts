import { Request, Response } from 'express';
import { UpdateProductService } from '../../services/Product/UpdateProductService';

class UpdateProductController {
	async handle(request: Request, response: Response) {
		const { id, name, description, price, url } = request.body;

		const updateProductsService = new UpdateProductService();

		const products = await updateProductsService.execute({
			id,
			name,
			description,
			price,
			url,
		});

		return response.json(products);
	}
}

export { UpdateProductController };
