import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [{
  path:'signup',
  component: RegisterPageComponent
  },
  {
    path:'**',
    redirectTo: 'signup'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
