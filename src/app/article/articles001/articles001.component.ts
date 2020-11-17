import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-articles001',
    templateUrl: './articles001.component.html',
    styleUrls: ['../article.shared.css']
})
export class Articles001Component implements OnInit {
    public numId: number

    constructor() { }

    @Input() id: string

    ngOnInit(): void {
        this.numId = parseInt(this.id)
    }

    selectedArticle(id: number): boolean {
        if ( id == this.numId ) { 
            return true 
        } else {
            return false
        }
    }
}
