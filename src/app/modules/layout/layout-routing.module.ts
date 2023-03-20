import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children:[
    {path:'',redirectTo:'products',pathMatch:"full"},
    { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) }, 
    { path: 'termcondition', loadChildren: () => import('./pages/terms-condition/terms-condition.module').then(m => m.TermsConditionModule) }
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
