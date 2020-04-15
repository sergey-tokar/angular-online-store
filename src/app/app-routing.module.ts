import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductCardComponent } from './pages/product-card/product-card.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: "catalog/:id",
    component: ProductCardComponent,
  },
  {
    path: '**', 
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
