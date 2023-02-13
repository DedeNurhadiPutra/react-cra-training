import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function BlogDetail() {
    const params = useParams()
    const [article, setArticle] = useState({})
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        async function getArticle() {
            // console.log('process.env.PUBLIC_URL_API', process.env.PUBLIC_URL_API);
            try {
                const request = await fetch(
                    `https://api.jikan.moe/v4/anime/${params.id}`
                )
                const response = await request.json()
                if (!request.ok) {
                    return setNotFound(true)
                }
    
                document.title = response.title
                setArticle(response?.data)
            } catch (error) {
                setHasError(true)
                console.log(error);
            }
                setLoading(false)
            }
            getArticle()
        }, [params])

    if (notFound) {
        return <h1>Page Not Found</h1>
    }

    return (
        <section className="section">
            <h1 className="section-title">Anime Detail</h1>

            {hasError && <p>Something went wrong.</p>}
            {loading ? <i>Loading article ... </i> :
                <div>
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-time">
                        {/* <time>{article.aired.string}</time> */}
                    </p>
                    <div>
                        <iframe width={`90%`} height="315" src={article.trailer.embed_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <p className="article-description" dangerouslySetInnerHTML={{ __html: article.synopsis.replace(/\n/g, '<br />') }}></p>
                    <p className="article-source">
                        Source : {''}
                        <a href={article.url} target="_blank" rel="noreferrer">
                            {article.title}
                        </a>
                    </p>
                </div>
            }
        </section>
    )
}