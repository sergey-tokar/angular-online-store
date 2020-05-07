import { IProduct } from '../core/interfaces/product';

export class ProductList {
    public productList: IProduct[];
    public categoriesList: string[];

    constructor(productList: IProduct[]) {
        this.productList = productList;
        this.addShortTitle();
        this.changeCategoriesToUpperCase();
    }

    private addShortTitle() {
        this.productList.map(item => {
            item.shortTitle = item.title.substr(0, 20);
        })
    }

    private changeCategoriesToUpperCase() {
        this.productList.map(item => {
            item.category = item.category.toUpperCase();
        })
    }

    public getAllProducts() {
        return this.productList;
    }

    public getProductById(id: number) {
        return this.productList.find(item => item.id === id);
    }

    public getCategories() {
        this.categoriesList = [];
        this.productList.forEach(item => {
            if (!this.categoriesList.includes(item.category)) {
                this.categoriesList.push(item.category);
            };
        });
        this.categoriesList.sort().push('ALL PRODUCTS');
        return this.categoriesList;
    }

    public getProductByCategory(category: string) {
        if (category !== 'ALL PRODUCTS') {
            return this.productList.filter(item => item.category === category);
        };
        return this.productList;
    }
}
