import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { ContactComponent } from './page/contact/contact.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './content/home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ToolsComponent } from './content/tools/tools.component';
import { ArticlesComponent } from './content/articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { Articles001Component } from './article/articles001/articles001.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { ButtonToolComponent } from './components/button-tool/button-tool.component';
import { ButtonArticleComponent } from './components/button-article/button-article.component';
import { HeaderArticleComponent } from './components/header-article/header-article.component';
import { ListArticlesComponent } from './content/list-articles/list-articles.component';
import { ArticleNotFoundComponent } from './shared/article-not-found/article-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    PageNotFoundComponent,
    ToolsComponent,
    ArticlesComponent,
    ArticleComponent,
    Articles001Component,
    ButtonGroupComponent,
    ButtonToolComponent,
    ButtonArticleComponent,
    HeaderArticleComponent,
    ListArticlesComponent,
    ArticleNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
