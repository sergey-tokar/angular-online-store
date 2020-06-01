import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogMenuItemComponent } from './catalog-menu-item.component';

describe('CatalogMenuComponent', () => {
  let component: CatalogMenuItemComponent;
  let fixture: ComponentFixture<CatalogMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
