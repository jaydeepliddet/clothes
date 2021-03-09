import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from './service/product.service';
import { TrendingComponent } from './trending/trending.component';
import { Trend1Component } from './trend1/trend1.component';
import { Trend2Component } from './trend2/trend2.component';
import { Trend3Component } from './trend3/trend3.component';
import { Trend4Component } from './trend4/trend4.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    HomeComponent,
    TrendingComponent,
    Trend1Component,
    Trend2Component,
    Trend3Component,
    Trend4Component,
    FooterComponent,
    ContactusComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
