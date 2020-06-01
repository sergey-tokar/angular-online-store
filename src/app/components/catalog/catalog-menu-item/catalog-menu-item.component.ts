import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-catalog-menu-item',
  templateUrl: './catalog-menu-item.component.html',
  styleUrls: ['./catalog-menu-item.component.scss']
})
export class CatalogMenuItemComponent {

  @Input() productsCategory: string;

  @Output() getProductsByCategory = new EventEmitter<string>();
  selectCategory(selectedCategory: string) {
    this.getProductsByCategory.emit(selectedCategory);
  }
}
