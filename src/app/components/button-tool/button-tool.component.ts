import { Component, OnInit, Input } from '@angular/core';

import { Tool } from '../../models/tool.model'

@Component({
    selector: 'app-button-tool',
    templateUrl: './button-tool.component.html',
    styleUrls: ['./button-tool.component.css']
})
export class ButtonToolComponent implements OnInit {
    public urlIcon: string

    constructor() { }

    @Input() tool: Tool
    @Input() expands: boolean

    ngOnInit(): void {
        if ( this.tool.icon.length > 0 ) {
            this.urlIcon = ( "assets/tools/" + this.tool.icon )
        } else {
            this.urlIcon = ( "assets/tools/coding-48.png" )
        }
        console.log("urlIcon: " + this.urlIcon)
        console.log("expands: " + this.expands)
        console.log("expands: " + typeof this.expands)
    }

    showQuantity(): boolean {
        return this.tool.quantity > 0 ? true : false
    }
}
