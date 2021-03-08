import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1 id="name"><Link to="/">James Gilley</Link></h1>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                <Link className="nav-link active" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/james-gilley-312466187/" target="_blank" rel="noreferrer">LinkIn</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/images.pg/James-Gilley.pdf" target="_blank">Resume</a>
                </li>
            </ul>
        </header>
    )
}
