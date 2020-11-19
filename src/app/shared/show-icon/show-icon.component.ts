/*-------------------------------------------------------------------------------------
Exemplo de execução:
    <app-show-icon icon="angular" width="48px" height="48px" radius="20%"></app-show-icon>
Obs.: Nenhum parametro é obrigatório    
-------------------------------------------------------------------------------------*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-show-icon',
    templateUrl: './show-icon.component.html',
    styleUrls: ['./show-icon.component.css']
})
export class ShowIconComponent implements OnInit {
    public urlIcon: string 
    public numWidth: number
    public numHeight: number

    constructor() { }

    @Input() icon: string
    @Input() width: String
    @Input() height: String
    @Input() radius: String

    ngOnInit(): void {
        switch (this.icon) {
            case "angular":
                this.urlIcon = "assets/app-angular.png"
                break;
            case "javascript":
                this.urlIcon = "assets/app-javascript.png"
                break;
            default:
                this.urlIcon = "assets/app-default.png"
                break;
        }

        if ( this.width == undefined ) { this.width = "32px" }
        if ( this.height == undefined ) { this.height = "32px" }
        if ( this.radius == undefined ) { this.radius = "50%" }

        this.numWidth = parseInt( this.width.replace("px","") )
        this.numHeight = parseInt( this.height.replace("px","") )
    }

}
