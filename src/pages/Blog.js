import { useState, useEffect } from "react"

export default function Blog() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getArticles() {
            const request = await fetch(
                'https://ghibliapi.herokuapp.com/films'
            )
            const response = await request.json()

            setArticles(response)
            setLoading(false)
        }
        return () => {
            getArticles()
        }
    }, [])


    return (
        <section>
            <h1>Blog</h1>

            {loading && <i>Loading article ... </i>}
            {!loading &&
                <div>
                    {articles.map(function (article) {
                        return <article key={article.id}>{article.title}</article>
                    })}
                </div>
            }
        </section>
    )
}