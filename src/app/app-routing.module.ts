import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  { path: "", redirectTo: '/home', pathMatch: 'full'},
  { path: "home", component: HomeComponent},
  { path: "products", component: ProductsComponent},
  { path: "product-add", component:ProductAddComponent},
  { path: "products/:id", component: ProductDetailComponent},
  { path: "products/edit/:id", component: ProductEditComponent},
  { path: "**", component: NotfoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
