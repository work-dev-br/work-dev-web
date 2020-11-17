import { Injectable } from '@angular/core';

import { Group } from '../models/group.model'

@Injectable({
    providedIn: 'root'
})
export class GroupsService {
    private groups: Group[] = []

    constructor() { 
        this.setGroup("tools", "Ferramentas", "tools-white-36dp.png")
        this.setGroup("tips", "Dicas", "tips-white-36dp.png")
        this.setGroup("projects", "Projetos", "projects-white-36dp.png")
        this.setGroup("varieties", "Variedades", "varieties-white-36dp.png")
    }

    private setGroup(name: string, title: string, icon: string): void {
        this.groups.push({ name, title, icon })
    }

    public getGroups(): Group[] {
        return this.groups
    }

    public getGroup(name: string): Group {
        let g: Group = undefined
        for (let group of this.groups) {
            if ( group.name == name ) { g = group }
        }
        return g
    }
}
