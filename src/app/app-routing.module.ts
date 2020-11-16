import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './content/home/home.component'
import { ContactComponent } from './page/contact/contact.component'
import { AboutComponent } from './page/about/about.component'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
