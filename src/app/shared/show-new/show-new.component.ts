import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-show-new',
    templateUrl: './show-new.component.html',
    styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit {

    constructor() { }

    @Input() new: boolean

    ngOnInit(): void {
    }

}
