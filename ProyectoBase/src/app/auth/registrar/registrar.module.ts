import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule} from '@angular/forms'; 

import { RegistrarPage } from './registrar.page';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: RegistrarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: []
})
export class RegistrarPageModule {}
