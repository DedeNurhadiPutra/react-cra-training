import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function BlogDetail() {
    const params = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        async function getArticle() {
            const request = await fetch(
                `https://ghibliapi.herokuapp.com/films/${params.id}`
            )

            if (!request.ok) {
                return setNotFound(true)
            }

            const response = await request.json()

            document.title = response.title
            setArticle(response)
            setLoading(false)
        }
        return () => {
            getArticle()
        }
    }, [params])

    if (notFound) {
        return <h1>Page Not Found</h1>
    }
    return (
        <section className="section">
            <h1 className="section-title">Blog Detail</h1>

            {loading ? <i>Loading article ... </i> :
                <div>
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-time">
                        <time>{article.release_date}</time>
                    </p>
                    <img className="article-image" src={article.image} alt={article.title} />
                    <p className="article-description">{article.description}</p>
                    <p className="article-source">
                        Source : {''}
                        <a href={article.url} target="_blank" rel="noreferrer">
                            {article.original_title_romanised}
                        </a>
                    </p>
                </div>
            }
        </section>
    )
}