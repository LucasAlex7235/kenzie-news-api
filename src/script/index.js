import {Api} from "./api.js"
class Cards {
    static async createCards() {
        const baseUrl = await Api.requestsApi()
        baseUrl.forEach(element => {
            const li = document.createElement("li")
            const figure = document.createElement("figure")
            const img = document.createElement("img")
            const description = document.createElement("p")
            const article = document.createElement("article")
            const divNews = document.createElement("div")
            const divTitle = document.createElement("div")
            const divContent = document.createElement("div")
            const categoria = document.createElement("span")
            const title = document.createElement("h3")
            const content = document.createElement("p")

            li.classList.add("cards")

            divNews.classList.add("news")

            divTitle.classList.add("title")

            divContent.classList.add("content")

            img.src = element.imagem
            description.innerText = element.fonte
            categoria.innerText = element.categoria
            title.innerText = element.titulo
            content.innerText = element.resumo
            
            divContent.append(content, description)
            divTitle.append(title)
            divNews.append(categoria)
            article.append(divNews, divTitle, divContent)
            figure.append(img)
            li.append(figure, article)
            
            this.listCards(li)
        });
        
    }

    static async listCards(cardsLi) {
        const vitrine = document.querySelector(".container--vitrine")
        
        if(cardsLi != undefined){
            vitrine.append(cardsLi)
        }
    }
} 

Cards.createCards()
Cards.listCards()
