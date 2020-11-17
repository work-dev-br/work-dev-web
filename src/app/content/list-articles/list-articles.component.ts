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

    @Input() showNew: boolean
    @Input() group: string
    @Input() tool: string

    ngOnInit(): void {
        console.log("showNew: " + this.showNew)
        console.log("showNew: " + typeof this.showNew)
        console.log("group..: " + this.group)
        console.log("group..: " + typeof this.group)
        console.log("tool...: " + this.tool)
        console.log("tool...: " + typeof this.tool)
    }

    ngDoCheck(): void {
        this.articles = this.articlesService.getArticlesNew()
    }    

}
