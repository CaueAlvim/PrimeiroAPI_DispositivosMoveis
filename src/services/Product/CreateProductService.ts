import { getCustomRepository } from 'typeorm';
import { ProductsRepositories } from '../../repositories/ProductsRepositories';

interface IProductRequest {
	name: string;
	description: string;
	price: number;
	url: string;
}

class CreateProductService {
	async execute({
		name,
		description,
		price,
		url,
	}: IProductRequest) {
		const productRepository = getCustomRepository(ProductsRepositories);

		const productAlreadyExists = await productRepository.findOne({ name });

		if (productAlreadyExists) {
			throw new Error('Product already registered');
		}

		const newProduct = productRepository.create({
			name,
			description,
			price,
			url,
		});

		await productRepository.save(newProduct);

		return newProduct;
	}
}

export { CreateProductService };
