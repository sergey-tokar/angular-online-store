import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent {

  @Input() productName: string;
  @Input() productPrice: number;
  @Input() productPictureUrl: string;
  @Input() productTitle: string;
}
