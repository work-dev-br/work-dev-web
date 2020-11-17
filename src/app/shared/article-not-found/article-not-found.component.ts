import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-article-not-found',
    templateUrl: './article-not-found.component.html',
    styleUrls: ['./article-not-found.component.css']
})
export class ArticleNotFoundComponent implements OnInit {

    constructor() { }

    @Input() id: string

    ngOnInit(): void {
    }

}
