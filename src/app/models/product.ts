import { IProduct } from '../core/interfaces/product';

export class Product {
    private productFromServer: IProduct;
    public id: number;
    public title: string;
    public price: number;
    public category: string;
    public description: string;
    public image: string;
    private _shortTitle: string;

    constructor(productFromServer: IProduct) {
        this.productFromServer = productFromServer;
        this.id = this.productFromServer.id;
        this.title = this.productFromServer.title;
        this.price = this.productFromServer.price;
        this.category = this.productFromServer.category;
        this.description = this.productFromServer.description;
        this.image = this.productFromServer.image;
    }
    
    get shortTitle() {
        this._shortTitle = this.productFromServer.title.substr(0, 20);
        return this._shortTitle;
    }
}
