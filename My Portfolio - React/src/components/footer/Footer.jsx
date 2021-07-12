import React from 'react'
import { Container } from 'react-bootstrap'
import myLogo from "../../images/my-logo.png"

import './footer.css'

export default function Footer() {
    return (
        <Container>
            <div className="text-center footer-wrapper">
                <a href="#home"><img src={myLogo} alt="" /></a>
                <p class="footer-info my-4">@2021 Designed & Built by <span><a className="toGithub" href="https://github.com/clumapay30/my-portfolio-react-v" target="_blank"><b>Christian Lumapay</b></a></span></p>
            </div>
        </Container>
    )
}
