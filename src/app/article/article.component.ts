import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Article } from '../models/article.model'

import { ArticlesService } from '../services/articles.service'

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css'],
    providers: [
        ArticlesService,
    ]    
})
export class ArticleComponent implements OnInit {
    public article: Article = undefined
    public group: string
    public tool: string
    public id: string
    public numId: number
    public isValid: boolean = true

    constructor(
        private route: ActivatedRoute, 
        private articlesService: ArticlesService,
    ) { }

    ngOnInit(): void {
        this.group = this.route.snapshot.paramMap.get("group")
        this.tool = this.route.snapshot.paramMap.get("tool")
        this.id = this.route.snapshot.paramMap.get("id")
        this.numId = parseInt(this.id)
        this.article = this.articlesService.getArticle(this.group, this.tool, this.numId)
        if ( this.article == undefined ) { this.isValid = false }
    }

    validFile(file: number): boolean {
        let valid: boolean = false
        /*-- Articles001: artigos de 1 a 10 --*/
        if ( file == 1 && this.article.id >= 1 && this.article.id <= 10 ) { valid = true }
        return valid
    }
}
