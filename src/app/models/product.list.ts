import { IProduct } from '../core/interfaces/product';
import { Product } from './product';

export class ProductList {
    private products: Product[];

    constructor(productList: IProduct[]) {
        this.products = productList.map(productFromServer => new Product(productFromServer));
    }

    public getAllProducts(): Product[] {
        return this.products;
    }

    public getProductById(id: number): Product {
        return this.products.find( product => product.id === id);
    }

    public getCategories(): String[] {
        let categoriesList = new Set<String>();
        this.products.forEach( product => categoriesList.add(product.category));
        let categories: String[] = [...categoriesList];
        categories.sort();
        return categories;
    }

    public getProductByCategory(category: string): Product[] {
        return this.products.filter( product => product.category === category);
    }
}
