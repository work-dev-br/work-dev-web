import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../models/article.model' 

@Component({
    selector: 'app-button-article',
    templateUrl: './button-article.component.html',
    styleUrls: ['./button-article.component.css']
})
export class ButtonArticleComponent implements OnInit {

    constructor() { }

    @Input() article: Article

    ngOnInit(): void {
    }

}
