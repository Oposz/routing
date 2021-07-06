import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposPageComponent } from './pages/repo-page/repos-page.component';


const routes: Routes = [
  {
    path:'',
    component: ReposPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
