import React, { useState } from 'react';
import { Container } from 'react-bootstrap'

import './SkillsList.css'
import htmlLogo from '../../images/html.png'
import cssLogo from '../../images/css.png'
import jsLogo from '../../images/js.png'
import bootstrapLogo from '../../images/bootstrap.png'
import reactLogo from '../../images/react.png'
import nodejsLogo from '../../images/nodejs.png'
import mongodbLogo from '../../images/mongodb.png'
import photoshopLogo from '../../images/photoshop.png'
import xdLogo from '../../images/adobe-xd.png'
import shopifyLogo from '../../images/shopify.png'
import wordpressLogo from '../../images/wordpress.png'

const SkillsList = () => {
    const [frontEnd, setFrontEnd] = useState(true);
    const [backEnd, setBackEnd] = useState(false);
    const [design, setDesign] = useState(false);
    const [others, setOthers] = useState(false);

    const fronEndHandler = () => {
        setFrontEnd(true)
        setBackEnd(false)
        setDesign(false)
        setOthers(false)
    }

    const backEndHandler = () => {
        setFrontEnd(false)
        setBackEnd(true)
        setDesign(false)
        setOthers(false)
    }

    const designHandler = () => {
        setFrontEnd(false)
        setBackEnd(false)
        setDesign(true)
        setOthers(false)
    }

    const othersHandler = () => {
        setFrontEnd(false)
        setBackEnd(false)
        setDesign(false)
        setOthers(true)
    }

    return (
        <Container>
            <div className="wrapper">
                <h1>Skills</h1>
                <div className="logo-wrapper">
                    <div>
                        <ul className={`logo-list ${frontEnd ? "active" : "inactive"}`}>
                            <li><img src={htmlLogo} alt="" /></li>
                            <li><img src={cssLogo} alt="" /></li>
                            <li><img src={jsLogo} alt="" /></li>
                            <li><img src={bootstrapLogo} alt="" /></li>
                            <li><img src={reactLogo} alt="" /></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={`logo-list ${backEnd ? "active" : "inactive"}`}>
                            <li><img src={nodejsLogo} alt="" /></li>
                            <li><img src={mongodbLogo} alt="" /></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={`logo-list ${design ? "active" : "inactive"}`}>
                            <li><img src={photoshopLogo} alt="" /></li>
                            <li><img src={xdLogo} alt="" /></li>
                        </ul>
                    </div>
                    <div>
                        <ul className={`logo-list ${others ? "active" : "inactive"}`}>
                            <li><img src={shopifyLogo} alt="" /></li>
                            <li><img src={wordpressLogo} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="skills-nav">
                    <div>
                        <h2 className={`frontEndText ${frontEnd ? "focus" : ""}`} onClick={fronEndHandler}>Front-end</h2>
                    </div>
                    <div>
                        <h2 className={`backEndText ${backEnd ? "focus" : ""}`} onClick={backEndHandler}>Back-end</h2>
                    </div>
                    <div>
                        <h2 className={`designText ${design ? "focus" : ""}`} onClick={designHandler}>Design</h2>
                    </div>
                    <div>
                        <h2 className={`othersText ${others ? "focus" : ""}`} onClick={othersHandler}>Others</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SkillsList;