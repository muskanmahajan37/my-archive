import React, { useState, useEffect } from 'react'
import { Container, Card, Button } from 'react-bootstrap'
import './projectbuilt.css'
import githubLogo from '../../images/github-white.png'

export default function ProjectBuilt() {
    const [showResults, setShowResults] = useState(false)
    const clickHandler = () => setShowResults(true)

    return (
        <Container style={{ padding: "0 0 200px" }} id="project">
            <h2 className="text-center" style={{ color: "#216869", fontWeight: "700" }}>Project I've Built</h2>
            <div className="card-list">
                <Card className="my-3" style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Client's Portfolio</Card.Title>
                        <Card.Text>
                            Nodejs version. I will try to recreate this project with react library.
                        </Card.Text>
                        <Button variant="dark" className="githubBtn"><a href="https://github.com/clumapay30/camille-v2-nodejs" target="_blank"><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
                <Card className="my-3" style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Todo List</Card.Title>
                        <Card.Text>
                            Quick project: Combined loading screen and todo-list
                        </Card.Text>
                        <Button variant="dark" className="githubBtn"><a href="https://github.com/clumapay30/todo-list-v2" target="_blank"><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
                <Card className="my-3" style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Expand Card</Card.Title>
                        <Card.Text>
                            This project inspired by a post on social media.
                        </Card.Text>
                        <Button variant="dark" className="githubBtn"><a href="https://github.com/clumapay30/expanding-cards" target="_blank"><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
            </div>
            <h1 className={`see-more ${showResults ? "show-more-inactive" : ""}`} onClick={clickHandler}>See more...</h1>
            <div className={`card-list  ${!showResults ? "show-more-inactive" : ""}`}>
                <Card className="my-3" style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Calculator</Card.Title>
                        <Card.Text>
                            This first project was built after learning front-end javascript and before learning nodejs etc.
                        </Card.Text>
                        <Button variant="dark" className="githubBtn"><a href="https://github.com/clumapay30/calculator" target="_blank"><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
                <Card className="my-3" style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Loading page</Card.Title>
                        <Card.Text>
                            This project inspired by a post on social media.
                        </Card.Text>
                        <Button variant="dark" className="githubBtn"><a href="https://github.com/clumapay30/loading-page" target="_blank"><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
                <Card className="my-3" style={{ width: '18rem', cursor: 'nesw-resize' }}>
                    <Card.Body>
                        <Card.Title>Nature Camp / from Udemy</Card.Title>
                        <Card.Text>
                            This project was part of the course I took on Udemy.
                        </Card.Text>
                        <Button variant="dark" className="githubBtn"><a href="https://github.com/clumapay30/nature-camp" target="_blank"><img src={githubLogo} alt="" /></a></Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}
