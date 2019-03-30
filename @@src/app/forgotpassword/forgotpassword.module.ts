import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ForgotpasswordComponent }])
  ],
  declarations: [ForgotpasswordComponent]
})
export class ForgotpasswordPage {}
