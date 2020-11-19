import { Component, OnInit, Input } from '@angular/core';

import { Group } from '../../models/group.model'
import { Tool } from '../../models/tool.model'
import { Article } from '../../models/article.model'

import { GroupsService } from '../../services/groups.service'
import { ToolsService } from '../../services/tools.service'

@Component({
    selector: 'app-header-article',
    templateUrl: './header-article.component.html',
    styleUrls: ['./header-article.component.css'],
    providers: [
        GroupsService,
        ToolsService,
    ]
})
export class HeaderArticleComponent implements OnInit {
    public expands: boolean = false
    public group: Group
    public tool: Tool
    public level: number
    public new: boolean

    constructor(
        private groupsService: GroupsService,   
        private toolsService: ToolsService,   
    ) { }

    @Input() article: Article

    ngOnInit(): void {
        this.group = this.groupsService.getGroup(this.article.group)
        this.tool = this.toolsService.getTool(this.article.tool)
        this.level = this.article.level
        this.new = this.article.isNew
    }

}
