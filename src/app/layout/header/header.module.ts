import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBodyComponent } from './header-body/header-body/header-body.component';
import { CartMenuComponent } from './header-body/components/cart-menu/cart-menu.component';
import { CartComponent } from './header-body/components/cart/cart.component';
import { UserComponent } from './header-body/components/user/user.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTopComponent,
    HeaderBodyComponent,
    CartMenuComponent,
    CartComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
