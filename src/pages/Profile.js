import { useEffect } from "react"

export default function Profile() {
    useEffect(()=> {
        document.title = "Profile"
    },[])

    return (
        <section className="section">
            <h1 className="section-title">Profile Page</h1>
            <p className="section-description">Est eu eiusmod ullamco aliquip amet exercitation fugiat. Excepteur deserunt nostrud minim elit duis velit incididunt dolore sunt. Et aliqua excepteur culpa nulla enim aliqua eiusmod. Consequat anim labore excepteur consectetur. Deserunt occaecat excepteur proident veniam laborum duis eiusmod duis qui incididunt ad commodo ea enim. In ut nulla laboris deserunt.</p>
        </section>
    )
}