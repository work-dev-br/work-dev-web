import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-button-group',
    templateUrl: './button-group.component.html',
    styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
    iconUrl: string = "assets/icons/"

    constructor() { }

    @Input() title: string
    @Input() icon: string
    
    ngOnInit(): void {
        this.iconUrl = this.iconUrl + this.icon
    }

}
