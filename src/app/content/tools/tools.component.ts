import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Group } from '../../models/group.model'
import { Tool } from '../../models/tool.model'
import { Article } from '../../models/article.model'

import { GroupsService } from '../../services/groups.service'
import { ToolsService } from '../../services/tools.service'
import { ArticlesService } from '../../services/articles.service'

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css'],
    providers: [
        GroupsService,
        ToolsService,
        ArticlesService,
    ]
})
export class ToolsComponent implements OnInit {
    public expands: boolean = true
    public parmGroup: string
    public group: Group
    public tools: Tool[] = []
    private articles: Article[] = []

    constructor(
        private route: ActivatedRoute,
        private groupsService: GroupsService,   
        private toolsService: ToolsService,   
        private articlesService: ArticlesService,   
    ) { }

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.parmGroup = this.route.snapshot.paramMap.get("group")
        this.group = this.groupsService.getGroup(this.parmGroup)
        this.tools = this.toolsService.getTools()
        this.articles = this.articlesService.getArticlesAll()
        for ( let i = 0; i < this.tools.length; i++ ) {
            let qt = 0
            this.articles.map((a) => {
                if ( a.group == this.parmGroup && a.tool == this.tools[i].name ) { qt++ }
            })
            this.tools[i].quantity = qt
        }
    }    

    showTool(tool: Tool): boolean {
        if ( tool.quantity > 0 ) { return true }
        return false
    }
}
