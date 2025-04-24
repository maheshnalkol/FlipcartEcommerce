import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { SingleprodComponent } from './shared/components/singleprod/singleprod.component';
import { ProdformComponent } from './shared/components/prodform/prodform.component';
import { UsersComponent } from './shared/components/users/users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/addprod',
    component: ProdformComponent,
  },
  {
    path: 'products/:prodId',
    component: SingleprodComponent,
  },
  {
    path: 'products/:prodId/edit',
    component: ProdformComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
