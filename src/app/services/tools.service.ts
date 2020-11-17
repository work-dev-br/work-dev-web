import { Injectable } from '@angular/core';

import { Tool } from '../models/tool.model'

@Injectable({
    providedIn: 'root'
})
export class ToolsService {
    private tools: Tool[] = []

    constructor() { 
        this.setTool("angular", "Angular", "", 0)
        this.setTool("javascript", "Javascript", "", 0)
        this.setTool("css", "CSS", "", 0)
        this.setTool("internet", "Internet", "", 0)
    }

    private setTool(name: string, title: string, icon: string, quantity: number): void {
        this.tools.push({ name, title, icon, quantity })
    }

    public getTools(): Tool[] {
        return this.tools
    }

    public getTool(name: string): Tool {
        let t: Tool = undefined
        for (let tool of this.tools) {
            if ( tool.name == name ) { t = tool }
        }
        return t
    }
}
