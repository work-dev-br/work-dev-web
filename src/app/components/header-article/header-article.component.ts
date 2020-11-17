import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../models/article.model'

import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-header-article',
    templateUrl: './header-article.component.html',
    styleUrls: ['./header-article.component.css'],
    providers: [
        ArticlesService,
    ]
})
export class HeaderArticleComponent implements OnInit {
    public numId: number
    public article: Article

    constructor(
        private articlesService: ArticlesService,
    ) { }

    @Input() group: string
    @Input() tool: string
    @Input() id: string

    ngOnInit(): void {
        this.numId = parseInt(this.id)
        this.article = this.articlesService.getArticle(this.group, this.tool, this.numId)
    }

}
