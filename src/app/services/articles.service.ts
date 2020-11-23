import { Injectable } from '@angular/core';

import { Article } from '../models/article.model'

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {
    private articles: Article[] = []

    constructor() {
        this.setArticles001()
    }

    /*-- Retorna um Artigo pela group, tool, id --*/
    public getArticle(group: string, tool: string, id: number): Article {
        let selArticle: Article = undefined
        this.articles.map((a) => {
            if ( a.group == group && a.tool == tool && a.id == id ) { selArticle = a }
        })
        return selArticle
    }

    /*-- Retorna todos os Artigos --*/
    public getArticlesAll(): Article[] {
        return this.articles
    }
    
    /*-- Retorna os Artigos de um group e tool --*/
    public getArticles(group: string, tool: string): Article[] {
        let selArticles: Article[] = []
        this.articles.map((a) => {
            if ( a.group == group && a.tool == tool ) { selArticles.push(a) }
        })
        return selArticles
    }
        
    /*-- Retorna os Artigos New --*/
    public getArticlesNew(): Article[] {
        let selArticles: Article[] = []
        this.articles.map((a) => {
            if ( a.isNew ) { selArticles.push(a) }
        })
        return selArticles
    }
        
    /*-- Inclui um novo Artigo no array --*/
    private setArticle( 
        id: number, 
        group: string, 
        tool: string,
        title: string, 
        description: string, 
        date: Date,
        level: number, 
        isNew: boolean, 
    ): void {
        this.articles.push({ 
            id, 
            group, 
            tool, 
            title,
            description, 
            date, 
            level, 
            isNew, 
        })
    }

    /*-- Criação de Artigos 001 - Iniciando em id=1 --*/
    private setArticles001(): void {

        /*------------------------------------------------------------------------
                              <<<  INDICE DE ARTIGOS  >>>
          Artigo 001 - Instalação do Node JS no Windows

        ------------------------------------------------------------------------*/

        /*-- Artigo 1 - Ferramentas - Node JS --*/
        this.setArticle(1, "courses", "nodejs", 
            "Instalação do Node JS no Windows", 
            "Passo a passo para o download e instalação da ferramenta Node JS no sistema operacional Windows.", 
            new Date(2020, 11, 22), 1, true, )

        /*-- Artigo 2 - Ferramentas - Angular --*/
        this.setArticle(2, "courses", "angular", 
            "Instalação do Angular CLI", 
            "Passo a passo para instalar o Angular CLI (command line interface), interface de comando de linha do framework Angular.", 
            new Date(2020, 11, 22), 1, true, )



        /*-- ARTIGOS ABAIXO PARA TESTES --*/
        /* ============================== */

        /*
        this.setArticle(3, "tips", "angular", 
            "Como exibir data no formato dd/mm/aaaa em Angular", 
            "Dica simples para exibir um objeto Date no formato dd/mm/aaaa utilizado pipe do Angular.", 
            new Date(2020, 11, 16), 1, true, )

        this.setArticle(4, "tips", "javascript", 
            "Titulo do artigo aqui", 
            "Breve descrição do conteúdo do artigo.", 
            new Date(2020, 11, 16), 2, true, )

        this.setArticle(5, "tips", "css", 
            "Dicas de CSS - Artigo 5 nivel 2 false ", 
            "Instalando o framework Angular no Windows.", 
            new Date(2020, 11, 17), 2, false, )

        this.setArticle(6, "varieties", "internet", 
            "Como instalar o Angular no Windows", 
            "Instalando o framework Angular no Windows.", 
            new Date(2020, 11, 17), 2, false, )
        */

    }
}
