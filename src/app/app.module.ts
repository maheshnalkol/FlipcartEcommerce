import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { SingleprodComponent } from './shared/components/singleprod/singleprod.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { ProdformComponent } from './shared/components/prodform/prodform.component';
import { UsersComponent } from './shared/components/users/users.component';
import { MaterialModule } from './shared/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SingleprodComponent,
    ProductsComponent,
    ProdformComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
