import { Request, Response } from 'express';
import { UpdateSalesService } from '../../services/Sales/UpdateSalesService';

class UpdateSalesController {
	async handle(request: Request, response: Response) {
		const { id, productId, userId, total, description, obs } = request.body;

		const updateSalesService = new UpdateSalesService();

		const sales = await updateSalesService.execute({
			id: id,
			productId: productId,
			userId: userId,
			total: total,
			description: description,
			obs: obs,
		});

		return response.json(sales);
	}
}

export { UpdateSalesController };
