import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [
    ContentComponent,
    Error404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContainerModule { }
