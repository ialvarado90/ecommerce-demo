import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { ContainerModule } from './container/container.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { PreLoaderComponent } from './layout/components/pre-loader/pre-loader.component';
import { ScrollToTopComponent } from './layout/components/scroll-to-top/scroll-to-top.component';



@NgModule({
  declarations: [
    LayoutComponent,
    PreLoaderComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    ContainerModule,
    FooterModule
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
