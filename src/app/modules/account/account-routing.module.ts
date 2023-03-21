import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [

  { path: '', component: AccountComponent ,
    children:[

    {path: '',redirectTo:"login",pathMatch:"full"
    },

    { path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) 
   },

   { path: 'ragister', 
   loadChildren: () => import('./pages/ragister/ragister.module').then(m => m.RagisterModule) 
   }, 
 
   { path: 'forgot', loadChildren: () => import('./pages/forget/forget.module').then(m =>  
     m.ForgetModule)
    },

   { path: 'resend-email', 
     loadChildren: () => import('./pages/resend-email/resend-email.module').then(m =>      
     m.ResendEmailModule) 
   },
 
   { path: 'reset-password', loadChildren: () => 
   import('./pages/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
  }
 
  ]},


 
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
