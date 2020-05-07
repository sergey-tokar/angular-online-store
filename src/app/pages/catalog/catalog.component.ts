import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/core/interfaces/product';
import { ProductList } from 'src/app/models/product.list';


@Component({
  selector: 'app-page-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public listOfProducts: IProduct[];
  public productsCategories: string[];
  public products: ProductList;
  private state: number = 0;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    if (!this.state) {
      this.productService.getAllProducts().subscribe(products => {
        this.products = products;
        this.listOfProducts = products.productList;
        this.productsCategories = products.getCategories();
        this.state = 1;
      })
    };

  }

  public getProductsByCategory(category: string) {
    this.listOfProducts = this.products.getProductByCategory(category);
  }

}
