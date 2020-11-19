import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../models/article.model'

import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-list-articles',
    templateUrl: './list-articles.component.html',
    styleUrls: ['./list-articles.component.css'],
    providers: [
        ArticlesService,
    ]
})
export class ListArticlesComponent implements OnInit {
    public articles: Article[] = []

    constructor(
        private articlesService: ArticlesService,       
    ) { }

    @Input() showType: boolean
    @Input() group: string
    @Input() tool: string
    @Input() showNew: boolean

    ngOnInit(): void {
        if ( this.showNew ) {
            this.articles = this.articlesService.getArticlesNew()
        } else {
            this.articles = this.articlesService.getArticles(this.group, this.tool)
        }
    }

}
