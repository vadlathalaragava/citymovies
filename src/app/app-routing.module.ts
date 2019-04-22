import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";

import { PaymentComponent } from "./payment/payment.component";
import {PaymentdoneComponent} from './paymentdone/paymentdone.component'; 
import {TheatreComponent} from './theatre/theatre.component';
const routes: Routes = [
  {path:'login', component:LoginComponent}, 
  {path:'payment',component:PaymentComponent},
  {path:'paymentdone',component:PaymentdoneComponent},
  {path:'theatre',component:TheatreComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'tab4', loadChildren: './tab4/tab4.module#Tab4PageModule' },
  { path: 'films', loadChildren: './films/films.module#FilmsPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'forgetpassword', loadChildren: './forgetpassword/forgetpassword.module#ForgetpasswordPageModule' },
  { path: 'booking/:id', loadChildren: './booking/booking.module#BookingPageModule' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
