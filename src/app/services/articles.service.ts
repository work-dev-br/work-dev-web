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

        /*-- Artigo 1 - Ferramentas - Angular --*/
        this.setArticle(1, "courses", "angular", 
            "O que é o framework Angular", 
            "Saiba o que é o o que faz esse framework que tem tornado uns dos mais utilizados em todo o mundo.", 
            new Date(2020, 11, 16), 1, true, )

            /*-- Artigo 2 - Ideias - Angular --*/
        this.setArticle(2, "tips", "angular", 
            "Como exibir data no formato dd/mm/aaaa em Angular", 
            "Dica simples para exibir um objeto Date no formato dd/mm/aaaa utilizado pipe do Angular.", 
            new Date(2020, 11, 16), 1, true, )

        /*-- Artigo 3 - Ferramentas - Angular --*/
        this.setArticle(3, "courses", "angular", 
            "Como instalar o Angular no Windows", 
            "Instalando o framework Angular no Windows.", 
            new Date(2020, 11, 17), 3, false, )

        /*-- Artigo 4 - Ideias - Angular --*/
        this.setArticle(4, "tips", "javascript", 
            "Titulo do artigo aqui", 
            "Breve descrição do conteúdo do artigo.", 
            new Date(2020, 11, 16), 2, true, )

        /*-- Artigo 5 - Ideias - CSS --*/
        this.setArticle(5, "tips", "css", 
            "Dicas de CSS - Artigo 5 nivel 2 false ", 
            "Instalando o framework Angular no Windows.", 
            new Date(2020, 11, 17), 2, false, )

        /*-- Artigo 6 - Variedades - Internet --*/
        this.setArticle(6, "varieties", "internet", 
            "Como instalar o Angular no Windows", 
            "Instalando o framework Angular no Windows.", 
            new Date(2020, 11, 17), 2, false, )



    }
}
