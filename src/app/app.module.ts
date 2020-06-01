import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CatalogComponent as CatalogPageComponent } from './pages/catalog/catalog.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';
import { CatalogItemComponent } from './components/catalog/catalog-item/catalog-item.component';
import { CatalogMenuItemComponent } from './components/catalog/catalog-menu-item/catalog-menu-item.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShoppingCartComponent,
    CatalogPageComponent,
    AboutUsComponent,
    ProductCardComponent,
    CatalogItemComponent,
    CatalogMenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
