import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    public group: string
    public tool: string
    public id: string
    public numId: number
    public isValid: boolean = true

    constructor(
        private route: ActivatedRoute,       
    ) { }

    ngOnInit(): void {
    }

    ngDoCheck(): void {
        this.group = this.route.snapshot.paramMap.get("group")
        this.tool = this.route.snapshot.paramMap.get("tool")
        this.id = this.route.snapshot.paramMap.get("id")
        this.numId = parseInt(this.id)
    }

    validFile(file: number): boolean {
        let valid: boolean = false
        /*-- Articles001: artigos de 1 a 10 --*/
        if ( file == 1 && this.numId >= 1 && this.numId <= 10 ) { valid = true }
        return valid
    }
}
