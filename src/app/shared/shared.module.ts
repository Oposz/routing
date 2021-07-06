import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';



const SHARED_COMPONENTS=[
  LogoComponent,
  HeaderComponent,
]

@NgModule({
  declarations: [
    SHARED_COMPONENTS
  ],
  imports: [

  ],
  exports: [
    SHARED_COMPONENTS
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
