import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { Trend1Component } from './trend1/trend1.component';
import { Trend2Component } from './trend2/trend2.component';
import { Trend3Component } from './trend3/trend3.component';
import { Trend4Component } from './trend4/trend4.component';

const routes: Routes = [


  {
    path:'',
    component:MainComponent
  },
  {
    path:'trend1',
    component:Trend1Component
  },
  {
    path:'trend2',
    component:Trend2Component
  },
  {
    path:'trend3',
    component:Trend3Component
  },
  {
    path:'trend4',
    component:Trend4Component
  },
  {
    path:'contact',
    component:ContactusComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
