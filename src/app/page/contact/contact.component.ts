import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
    public iconGmail: string = "assets/services/gmail-128px.png"

    constructor() { }

    ngOnInit(): void {
    }

}
