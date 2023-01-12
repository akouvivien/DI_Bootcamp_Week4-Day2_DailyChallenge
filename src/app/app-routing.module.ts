import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cpt1Component } from './cpt1/cpt1.component';
import { Cpt2Component } from './cpt2/cpt2.component';
import { Cpt3Component } from './cpt3/cpt3.component';
const routes: Routes = [
{path:'about',component: Cpt1Component},
{path:'contact',component: Cpt2Component},
{path:'login',component: Cpt3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

