import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposService } from './services/repos.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations:[],
  imports: [
    CommonModule,
    ReposRoutingModule,
    SharedModule
  ],
  providers: [
    ReposService
  ]
})
export class ReposModule { }
