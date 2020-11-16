import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    imageSrc = 'assets/javascript-circle-48.png'  
    imageAlt = 'Javascript'


    constructor() { }

    ngOnInit(): void {
    }

}
