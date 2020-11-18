import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { Group } from '../../models/group.model'
import { Tool } from '../../models/tool.model'

import { GroupsService } from '../../services/groups.service'
import { ToolsService } from '../../services/tools.service'

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css'],
    providers: [
        GroupsService,
        ToolsService,
    ]
})
export class ArticlesComponent implements OnInit {
    public expands: boolean = false
    public showNew: boolean = false
    public parmGroup: string
    public group: Group
    public parmTool: string
    public tool: Tool

    constructor(
        private route: ActivatedRoute,
        private groupsService: GroupsService,   
        private toolsService: ToolsService,   
    ) { }

    ngOnInit(): void {
    }
    
    ngDoCheck(): void {
        this.parmGroup = this.route.snapshot.paramMap.get("group")
        this.parmTool = this.route.snapshot.paramMap.get("tool")
        this.group = this.groupsService.getGroup(this.parmGroup)
        this.tool = this.toolsService.getTool(this.parmTool)
    }
}
