export interface NewsArticles {
    articles:Article[]
}

export interface Article {
    author:string,
    title:string,
    description:string,
    url:string,
    urlToImage?:string,
    publishedAt:string,
    content:string,
}