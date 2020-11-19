import { Injectable } from '@angular/core';

import { Group } from '../models/group.model'

@Injectable({
    providedIn: 'root'
})
export class GroupsService {
    private groups: Group[] = []

    constructor() { 
        this.setGroup("courses", "Cursos")
        this.setGroup("tips", "Dicas")
        this.setGroup("projects", "Projetos")
        this.setGroup("varieties", "Variedades")
    }

    private setGroup(name: string, title: string): void {
        this.groups.push({ name, title })
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
