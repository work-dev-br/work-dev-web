import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Tool } from '../../models/tool.model'
import { Article } from '../../models/article.model'

import { ToolsService } from '../../services/tools.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css'],
    providers: [
        ToolsService,
    ]
})
export class ToolsComponent implements OnInit {
    public group: string
    public tools: Tool[] = []
    private articles: Article[] = []

    constructor(
        private route: ActivatedRoute,
        private toolsService: ToolsService,   
        private articlesService: ArticlesService,   
    ) { }

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.group = this.route.snapshot.paramMap.get("group")
        console.log("tools.component> group: " + this.group)
        this.tools = this.toolsService.getTools()
        this.articles = this.articlesService.getArticlesAll()
        for ( let i = 0; i < this.tools.length; i++ ) {
            let qt = 0
            this.articles.map((a) => {
                if ( a.group == this.group && a.tool == this.tools[i].name ) { qt++ }
            })
            this.tools[i].quantity = qt
            console.log("Contou artigos de " + this.tools[i].title + " = " + qt)
        }
    }    

    showTool(tool: Tool): boolean {
        if ( tool.quantity > 0 ) { return true }
        return false
    }
}
