import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/core/interfaces/product';
import { ProductList } from 'src/app/models/product.list';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-page-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public products: Product[];
  public productsCategories: String[];
  public productList: ProductList;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getAllProductsFromServer().subscribe(productsList => {
      this.productList = productsList;
      this.products = this.productList.getAllProducts();
      this.productsCategories = productsList.getCategories();
      this.productsCategories.push('all products');
    })
  }

  public getProductsByCategory(selectedCategory: string): Product[] {
    if (selectedCategory !== 'all products') {
      this.products = this.productList.getProductByCategory(selectedCategory);
    } else { 
      this.products = this.productList.getAllProducts();
    };
    return this.products;
  }
}
