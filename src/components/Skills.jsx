//React, JavaScript, Python, Flask and Flutter
// Team Communication and Coordination, Flexible and Constant Learner, Time Management, Creativity and Problem Solver
import python from '../static/python.png';
import js from '../static/js.png';
import physics from '../static/physics.png';
import flutter from '../static/flutter.png';
import flask from '../static/flask.png';
import htmlcss from '../static/html&css.png';
import organization from '../static/organization_10822618.png';
import communication from '../static/effective-communication_16743787.png';
import workingTime from '../static/working-time_10635269.png';
import creativity from '../static/creativity.png';
import flexibility from '../static/flexibility.png';
import microphone from '../static/microphone.png';

export default function Skill() {
    return (
        <div className="Skills">
            <span className="title" style={{ width: "fit-content", margin: "0 auto" }}>
                <div className="headingBG" id="blue"><div className="headingBG" id="red"></div></div>
                    SKILLS
            </span>
            <ul className="HardSkills">
                <li>
                    <div className="sector"><img src={python}></img></div>
                </li>
                <li>
                    <div className="sector"><img src={js} alt="JavaScript" /></div>
                </li>
                <li>
                    <div className="sector"><img src={physics} alt="Physics" /></div>
                </li>
                <li>
                    <div className="sector"><img src={flutter} alt="Flutter" /></div>
                </li>
                <li>
                    <div className="sector"><img src={flask} alt="Flask" /></div>
                </li>
                <li>
                    <div className="sector"><img src={htmlcss} alt="HTML & CSS" /></div>
                </li>
            </ul>

            <h3 className="h3WRKS" style={{ position: "relative", top: "10%", left: "20%" , zIndex: "-1"}} >Hard Skills</h3>
            <div className="SkillBubbles">
                <span>Python</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>HTML/CSS</span>
                <span>Flutter</span>
                <span>C++</span>
                <span>Prompt Engineering</span>
            </div>


            <ul className="SoftSkills">
                <li>
                    <div className="sector">
                        <img src={organization} alt="Organization" />
                    </div>
                </li>
                <li>
                    <div className="sector">
                        <img src={communication} alt="Effective Communication" />
                    </div>
                </li>
                <li>
                    <div className="sector">
                        <img src={workingTime} alt="Time Management" />
                    </div>
                </li>
                <li>
                    <div className="sector">
                        <img src={creativity} alt="Creativity" />
                    </div>
                </li>
                <li>
                    <div className="sector">
                        <img src={flexibility} alt="Flexibility" />
                    </div>
                </li>
                <li>
                    <div className="sector">
                        <img src={microphone} alt="Microphone" />
                    </div>
                </li>
            </ul>

            <h3 className="h3WRKS" style={{ position: "relative", top: "-15%", left: "20%" , zIndex: "-1"}} >Soft Skills</h3>
            <div className="SkillBubbles SoftBubbles">
                <span>Team Coordination</span>
                <span>Effective Communicater</span>
                <span>Time Managment</span>
                <span>Creativity and Intuition</span>
                <span>Flexible and Adaptable</span>
                <span>English Proficieny</span>
            </div>
        </div>
    )
}
