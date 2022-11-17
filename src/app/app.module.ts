import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YerbasListComponent } from './yerbas-list/yerbas-list.component';

import { RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { YerbasAboutComponent } from './yerbas-about/yerbas-about.component';
import { YerbasComponent } from './yerbas/yerbas.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RecetaComponent } from './receta/receta.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContacComponent } from './contac/contac.component';

@NgModule({
  declarations: [
    AppComponent,
    YerbasListComponent,
    InputIntegerComponent,
    YerbasAboutComponent,
    YerbasComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RecetaComponent,
    PageNotFoundComponent,
    ContacComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'carrito', component:YerbasComponent},
      {path:'receta', component:RecetaComponent},
      {path:'contactos', component:ContacComponent},
      {path:'**', component:PageNotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
