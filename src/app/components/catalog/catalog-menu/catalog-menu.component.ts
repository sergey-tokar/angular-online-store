import { Component, OnInit, Input } from '@angular/core';
import { CatalogComponent } from 'src/app/pages/catalog/catalog.component';

@Component({
  selector: 'app-catalog-menu',
  templateUrl: './catalog-menu.component.html',
  styleUrls: ['./catalog-menu.component.scss']
})
export class CatalogMenuComponent implements OnInit {
  public selectedCategory: string = 'ALL PRODUCTS';
  constructor(private catalogComponent: CatalogComponent) { }

  ngOnInit(): void {
  }

  @Input() productsCategory: string;

  public getProductsByCategory(selectedCategory: string) {
    this.catalogComponent.getProductsByCategory(selectedCategory);
  }
}
