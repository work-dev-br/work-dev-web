import { Component, OnInit, Input } from '@angular/core';

import { Tool } from '../../models/tool.model'

@Component({
    selector: 'app-button-tool',
    templateUrl: './button-tool.component.html',
    styleUrls: ['./button-tool.component.css']
})
export class ButtonToolComponent implements OnInit {

    constructor() { }

    @Input() tool: Tool

    ngOnInit(): void {
    }

}
