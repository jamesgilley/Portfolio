import React from 'react'
import studentPicture from '../images.pg/image0.pg.jpeg'

export default function Main() {
    return (
        <div id="back" class="jumbotron jumbotron-fluid">
            <div class="container">
                <img src={studentPicture} alt="student" />
            </div>
            <section>
                <div id="bio">
                    <p>
                        Hi, my names is James Gilley. I am enrolled in University of California Berkeley's Full Stack Coding Bootcamp for web development.  In taking the Full Stack Coding
                        Boot Camp, I am looking for a new adventure in life. A new path that
                        allows me creativity and flexibility.
                    </p>
                </div>
            </section>
            <section>
                <h2>Contact Info</h2>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:jamesgilley1@icloud.com">jamesgilley1@icloud.com</a></li>
                    <li><strong>Github:</strong> <a href="https://github.com/jamesgilley" target="_blank" rel="noreferrer">James Gilley</a></li>
                </ul>
            </section>
        </div>
    )
}
