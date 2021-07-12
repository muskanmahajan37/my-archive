import { Container } from 'react-bootstrap'

import './WorkedExperience.css';

const WorkedExperience = () => {
    return (
        <Container className="my-5">
            <div className="d-flex flex-wrap experience-container text-light" style={{marginTop: "200px"}}>
                <h1 className="mx-3 my-3 experience-title">Worked Experience</h1>
                <div className="experience-container">
                    <div className="mx-3 experience-header">
                        <h4>Home Based Virtual Assistant</h4>
                        <p>Jan 2020 - present</p>
                    </div>
                    <div className="mx-3 experience-header-p">
                        <p>Administrative assistant, Graphics & Audio editing, Data Entry, Lead Generation, Social Media Management, Calendar Management.</p>
                    </div>
                </div>
                <div className="experience-container">
                    <div className="mx-3 experience-header">
                        <h4>Elevated Perspective (Virtual Assistant)</h4>
                        <p>Oct 2019 - Dec 2019</p>
                    </div>
                    <div className="mx-3 experience-header-p">
                        <p>Administrative assistant, Graphics & Audio editing, Data Entry, Lead Generation, Social Media Management, Calendar Management.</p>
                    </div>
                </div>
                <div className="experience-container">
                    <div className="mx-3 experience-header">
                        <h4>123Employee (Virtual Assistant)</h4>
                        <p>Nov 2016 - Oct 2019</p>
                    </div>
                    <div className="mx-3 experience-header-p">
                        <p>Administrative assistant, Graphics & Audio editing, Data Entry, Lead Generation, Social Media Management, Calendar Management.</p>
                    </div>
                </div>
                <p className="mx-3 my-3 experience-p">My previous colleagues know me as a highly creative and motivated Virtual Assistant who can always be trusted to come up with a new approach.</p>
            </div>
        </Container>
    )
}

export default WorkedExperience;