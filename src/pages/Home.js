import { useEffect } from "react"

export default function Home() {
    useEffect(()=> {
        document.title = "Home"
    },[])

    return (
        <section className="section">
            <h1 className="section-title">Welcome Brother and Sister</h1>
            <p className="section-description">Consectetur excepteur voluptate est exercitation. Ad est duis mollit dolor aliqua sunt officia amet amet. Fugiat proident amet laborum ullamco adipisicing nisi excepteur. Voluptate dolore consectetur in proident eu reprehenderit laboris velit sit nisi. Occaecat sunt occaecat Lorem ad do voluptate occaecat consectetur amet labore. Commodo ut nisi excepteur veniam mollit sunt quis ipsum dolor qui nulla proident.</p>
        </section>
    )
}