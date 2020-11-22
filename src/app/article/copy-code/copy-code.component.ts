import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-copy-code',
    templateUrl: './copy-code.component.html',
    styleUrls: ['./copy-code.component.css']
})
export class CopyCodeComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    /*-- Para copiar para o clipboard --*/
    CopyTextCode(): void {
        var content = document.getElementById("copy-code-text").innerText
        navigator.clipboard.writeText(content);
    }  

}
