import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export default function Blog() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "Blog"
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
        <section className="section">
            <h1 className="section-title">Blog</h1>

            {loading ? <i>Loading article ... </i> :
                <div className="articles">
                    {articles.map(function (article) {
                        return (
                            <article key={article.id} className="article">
                                <h2 className="article-title">
                                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                                </h2>
                                {/* <time>{new Date(article.release_date).toLocaleDateString()}</time> */}
                                <time className="article-time">{article.release_date}</time>
                            </article>
                        )
                    })}
                </div>
            }
        </section>
    )
}