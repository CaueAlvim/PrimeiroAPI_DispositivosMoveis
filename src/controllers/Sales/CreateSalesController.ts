import { Request, Response } from 'express';
import { CreateSalesService } from '../../services/Sales/CreateSalesService';

class CreateSalesController {
	async handle(request: Request, response: Response) {
		const { productId, userId, total, description, obs } = request.body;

		const createSalesService = new CreateSalesService();

		const Sales = await createSalesService.execute({
			productId,
			userId,
			total,
			description,
			obs,
		});

		return response.json(Sales);
	}
}

export { CreateSalesController };
