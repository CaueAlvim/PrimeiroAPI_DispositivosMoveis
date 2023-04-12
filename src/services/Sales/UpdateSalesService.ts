import { hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { SalesRepositories } from '../../repositories/SalesRepositories';

interface ISalesRequest {
	id: string;
	productId: string;
	userId: string;
	total: number;
	description: string;
	obs: string;
}

class UpdateSalesService {
	async execute({
		id,
		productId,
		userId,
		total,
		description,
		obs,
	}: ISalesRequest) {
		if (!id) {
			throw new Error('id obrigatorio');
		}
		if (!productId) {
			throw new Error('ID do produto obrigatorio');
		}
		if (!userId) {
			throw new Error('ID do usuário obrigatorio');
		}
		if (!total) {
			throw new Error('Total obrigatorio');
		}
		if (!description) {
			throw new Error('Descrição obrigatorio');
		}

		const salesRepository = getCustomRepository(SalesRepositories);

		const result = await salesRepository
			.createQueryBuilder()
			.update({
				productId: productId,
				userId: userId,
				total: total,
				description: description,
				obs: obs,
			})
			.where({ id })
			.execute();

		return result;
	}
}

export { UpdateSalesService };
