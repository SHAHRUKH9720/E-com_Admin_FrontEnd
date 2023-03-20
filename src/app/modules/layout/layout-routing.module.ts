import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent,
  children:[
    {path:'',redirectTo:'products',pathMatch:"full"},

    { path: 'products',
     loadChildren: () => import('./pages/products/products.module')
    .then(m => m.ProductsModule) 
    }, 

    { path: 'termcondition',
      loadChildren: () => import('./pages/terms-condition/terms-condition.module').
      then(m => m.TermsConditionModule)
    },

    { path: 'privacy-policy',
     loadChildren: () => import('./pages/privacy-policy/privacy-policy.module')
     .then(m => m.PrivacyPolicyModule) 
    },

    { path: 'categories',
     loadChildren: () => import('./pages/categories/categories.module')
     .then(m => m.CategoriesModule) 
    },

    { path: 'profile', 
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) 
    },
    
    { path: 'users', loadChildren: () => import('./pages/users/users.module')
    .then(m => m.UsersModule) 
    },
  ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
