import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface ISalesRequest {
	productId: string;
	userId: string;
	total: number;
	description: string;
	obs: string;
}

class CreateSalesService {
	async execute({ productId, userId, total, description, obs }: ISalesRequest) {
		const salesRepository = getCustomRepository(SalesRepositories);

		if (!productId) {
			throw new Error('Product ID is required.');
		}

		if (!userId) {
			throw new Error('User ID is required.');
		}

		if (!total) {
			throw new Error('Total is required.');
		}

		if (!description) {
			throw new Error('Description is required.');
		}

		if (!obs) {
			throw new Error('Observation is required.');
		}

		const newSale = salesRepository.create({
			productId,
			userId,
			total,
			description,
			obs,
		});

		await salesRepository.save(newSale);

		return newSale;
	}
}

export { CreateSalesService };
