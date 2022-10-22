import { useEffect } from "react"

export default function Contact() {
    useEffect(()=> {
        document.title = "Contact"
    },[])

    return (
        <section className="section">
            <h1 className="section-title">Contact Page</h1>
            <p className="section-description">You can contact me on : </p>
            <div>
                <li>Phone : 0812345678910</li>
                <li>E-mail : test@gmail.com</li>
            </div>
            <p className="section-description">Or You can find me on : </p>
            <div>
                <li>
                    <a href="https://facebook.com/">Facebook</a>
                </li>
                <li>
                    <a href="https://twitter.com/">Twitter</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">Instagram</a>
                </li>
            </div>
        </section>
    )
}