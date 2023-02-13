import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export default function Blog() {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        document.title = "Anime"
        async function getArticles() {
            try {
                const request = await fetch(
                    'https://api.jikan.moe/v4/top/anime'
                )
                const response = await request.json()
                setArticles(response.data)
                // console.log(response);
            } catch (error) {
                setHasError(true)
                console.log(error);
            }
                setLoading(false)
            }
            getArticles()
        }, [setArticles])


    return (
        <section className="section">
            <h1 className="section-title">Best Anime List</h1>

            {hasError && <p>Something went wrong.</p>}
            {loading ? <i>Loading article ... </i> :
                <div className="articles">
                    {articles.map(function (article, index) {
                        console.log('kontlo',article?.mal_id);
                        return (
                            <div className="card">
                                <article key={index} className="article">
                                    <h2 className="article-title">
                                        <Link to={`/anime/${article?.mal_id}`}>{article.title}</Link>
                                    </h2>
                                    {/* <time>{new Date(article.release_date).toLocaleDateString()}</time> */}
                                    <div>
                                        <Link to={`/anime/${article.mal_id}`}>
                                            <img src={article.images.jpg.image_url} alt="" />
                                        </Link>
                                    </div>
                                    <h4> Rating : {article.score}</h4>
                                    <time className="article-time">{article.aired.string}</time>
                                </article>
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    )
}