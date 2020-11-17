import { Component, OnInit } from '@angular/core';

import { Group } from '../../models/group.model'

import { GroupsService } from '../../services/groups.service'

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [
        GroupsService,
    ]
})
export class HomeComponent implements OnInit {
    public groups: Group[] = []
    public showNew: boolean = true

    constructor(
        private groupsService: GroupsService,
    ) { }

    ngOnInit(): void {
        this.groups = this.groupsService.getGroups()
    }

}
