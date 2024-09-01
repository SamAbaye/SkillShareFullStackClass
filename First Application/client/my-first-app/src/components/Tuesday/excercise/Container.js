import Nav_Bar from "./Nav_Bar"
import React from "react"
import Main from "./Main"
import Footer from "./Footer"


const Container = () => {
    return (
        <div className="bg-warning-subtle" id="container">
            <Nav_Bar />
            <Main />
            <Footer />
        </div>
    )
}

export default Container