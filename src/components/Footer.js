import React from "react"
import small_logo from "../images/small_logo.png"

const Footer = () => {
    return (
        <footer>
            <section className="container">
                <div className="footer">
                    <img src={small_logo} alt='footer'/>
                    <p>Copyright © 2023 - Little Lemon</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;