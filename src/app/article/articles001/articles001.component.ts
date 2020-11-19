import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-articles001',
    templateUrl: './articles001.component.html',
    styleUrls: ['../article.shared.css']
})
export class Articles001Component implements OnInit {

    constructor() { }

    @Input() numId: number

    ngOnInit(): void {
    }

    selectedArticle(id: number): boolean {
        if ( id == this.numId ) { 
            return true 
        } else {
            return false
        }
    }
}
