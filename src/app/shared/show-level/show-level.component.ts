import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-show-level',
    templateUrl: './show-level.component.html',
    styleUrls: ['./show-level.component.css']
})
export class ShowLevelComponent implements OnInit {
    public levels: number[] 

    constructor() { }

    @Input() level: number

    ngOnInit(): void {
        this.levels = new Array(this.level)
    }

}
