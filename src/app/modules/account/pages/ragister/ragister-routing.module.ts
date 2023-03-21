import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RagisterComponent } from './ragister.component';

const routes: Routes = [{ path: '', component: RagisterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RagisterRoutingModule { }
