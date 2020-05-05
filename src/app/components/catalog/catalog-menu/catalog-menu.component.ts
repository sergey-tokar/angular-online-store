import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-menu',
  templateUrl: './catalog-menu.component.html',
  styleUrls: ['./catalog-menu.component.scss']
})
export class CatalogMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() productsCategory: string;
}
