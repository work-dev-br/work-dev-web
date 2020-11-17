import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
    public showNew: boolean = false
    public group: string
    public tool: string

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
    }
    
    ngDoCheck(): void {
        this.group = this.route.snapshot.paramMap.get("group")
        this.tool = this.route.snapshot.paramMap.get("tool")
    }
}
