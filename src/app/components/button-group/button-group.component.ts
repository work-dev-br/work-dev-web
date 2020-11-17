import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

    constructor() { }

    @Input() title: string
    
    ngOnInit(): void {
    }

}
