
export class Api {
    static async requestsApi() {
        const baseUrl = await fetch("https://kenzie-news-api.herokuapp.com/api/news")
            .then(res => res.json())
            .then(res => res)
            .catch(err => console.log(err))
        return baseUrl
    }
} 

