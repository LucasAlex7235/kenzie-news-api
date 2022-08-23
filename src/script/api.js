
class Cards {
    static async criarCards() {
        const baseUrl = await fetch("https://kenzie-news-api.herokuapp.com/api/news")
            .then(res => res.json())
            .then(res => res)

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
            
            this.listarCards(li)
        });
        
    }

    static async listarCards(cardsLi) {
        const vitrine = document.querySelector('.container--vitrine')
        
        if(cardsLi != undefined){
            vitrine.append(cardsLi)
        }
    }
} 

Cards.criarCards()
Cards.listarCards()