import './FixedSideBar.css';
import fixedLine from '../../images/fixed-line.png';
import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import github from '../../images/github.png';
import myResume from '../../utilities/myResume.pdf';

const FixedSideBar = () => {
    return (
        <div className="fixed-wrapper">
            <img className="fixed-left-line" src={github} alt="" />
            <div className="social-container">
                <img className="fixed-left-line" src={fixedLine} alt="" />
                <div className="fixed-left-sm">
                    <div>
                        <a href="https://www.linkedin.com/in/christian-virtual-assistant/" target="_blank"><img className="my-4 linkedin" src={linkedin} alt="" /></a>
                    </div>
                    <div>
                        <a href="https://twitter.com/c_lumapay30" target="_blank"><img className="my-4 twitter" src={twitter} alt="" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/clumapay30" target="_blank"><img className="my-4 github" src={github} alt="" /></a>
                    </div>
                    <div>
                        <a href={myResume} target="_blank"><button className="resume-btn">Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixedSideBar;