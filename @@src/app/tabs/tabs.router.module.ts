import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';




const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: '../tab1/tab1.module#Tab1PageModule'
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: '../tab2/tab2.module#Tab2PageModule'
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: '../tab3/tab3.module#Tab3PageModule'
          }
        ]
      },

      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: '../login/login.module#LoginPage'
          }
        ]
      },

      {
        path: 'forgotpassword',
        children: [
          {
            path: '',
            loadChildren: '../forgotpassword/forgotpassword.module#ForgotpasswordPage'
          }
        ]
      },

      {
        path: 'register',
        children: [
          {
            path: '',
            loadChildren: '../register/register.module#RegisterComponentPage'
          }
        ]
      },

       

      {
        path: 'book-ticket',
        children: [
          {
            path: '',
            loadChildren: '../book-ticket/book-ticket.module#BookTicketPage'
          }
        ]
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
