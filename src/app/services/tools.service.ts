import { Injectable } from '@angular/core';

import { Tool } from '../models/tool.model'

@Injectable({
    providedIn: 'root'
})
export class ToolsService {
    private tools: Tool[] = []

    constructor() { 
        this.setTool("angular", "Angular")
        this.setTool("nodejs", "Node JS")
        this.setTool("javascript", "Javascript")
        this.setTool("css", "CSS")
        this.setTool("internet", "Internet")
    }

    private setTool(name: string, title: string, quantity: number = 0): void {
        this.tools.push({ name, title, quantity })
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
