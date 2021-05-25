import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ViewproductsComponent } from './viewproducts/viewproducts.component';
//import { SearchPipe } from '../search.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    ViewproductsComponent,
    //SearchPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
