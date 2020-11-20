import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './content/home/home.component'
import { ContactComponent } from './page/contact/contact.component'
import { HelpComponent } from './page/help/help.component'
import { AboutComponent } from './page/about/about.component'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component'

import { ToolsComponent } from './content/tools/tools.component'
import { ArticlesComponent } from './content/articles/articles.component'
import { ArticleComponent } from './article/article.component'

const routes: Routes = [
    { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'help', component: HelpComponent },
    { path: 'about', component: AboutComponent },
    { path: 'tools/:group', component: ToolsComponent },
    { path: 'articles/:group/:tool', component: ArticlesComponent },
    { path: 'article/:group/:tool/:id', component: ArticleComponent },
    { path: '**', component: PageNotFoundComponent }, 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
