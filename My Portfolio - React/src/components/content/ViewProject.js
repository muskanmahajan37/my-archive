import './ViewProject.css'

import vpline from '../../images/view-project-line.png';
import darrow from '../../images/down-arrow.png';

const ViewProject = () => {
    return (
        <div className="d-flex align-items-center" style={{padding: '150px 0 0 0'}}>
            <img src={vpline} alt="line" width="85" height="1" />
            <p style={{color: '#CBCBCB'}} className="mx-3 mt-2">View Project</p>
            <a href="#project"><img src={darrow} alt="arrow" className="downArrow"/></a>
        </div>
    )
}

export default ViewProject;