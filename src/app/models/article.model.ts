
export class Article {
    id: number
    group: string
    tool: string
    title: string
    description: string
    date: Date
    level: number              // Nivel:  1=Basico 2=Intermediario 3=Avançado
    isNew: boolean             // Artigo novo aparece na home page
}