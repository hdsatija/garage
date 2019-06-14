import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';
import { GoogleformComponent } from './bad/googleform/googleform.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'good', component: GoodComponent },
  { path: 'bad', component: BadComponent },
  { path: 'googleform', component: GoogleformComponent },




  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
 