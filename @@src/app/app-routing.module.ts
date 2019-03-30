import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
 
import {LoginComponent} from './login/login.component';
 // import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
const routes: Routes = [

  { path:'login', component:LoginComponent },
   
  // {path:'forgotpassword', component:ForgotpasswordComponent},
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
 
   
];
@NgModule({
  imports: [ 
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
