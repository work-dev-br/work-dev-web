import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public coll: string = "{{"
    public title: string = "work.dev.br"
    public colh: string = "}}"

    constructor() { }

    ngOnInit(): void {
    }

}
