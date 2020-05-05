import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/core/interfaces/product';


@Component({
  selector: 'app-page-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public products: IProduct[];
  public productsCategories: string[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getAllProducts().subscribe(products => {
      this.products = products;
      this.productsCategories = [];
      this.products.forEach(item => {
        item.shortTitle = item.title.substr(0, 20);
        if (!this.productsCategories.includes(item.category.toUpperCase())) {
          this.productsCategories.push(item.category.toUpperCase());
        };
      });
      this.productsCategories.sort().push('ALL PRODUCTS');
    });
  }

}
