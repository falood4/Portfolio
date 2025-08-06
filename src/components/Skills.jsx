//React, JavaScript, Python, Flask and Flutter
// Team Communication and Coordination, Flexible and Constant Learner, Time Management, Creativity and Problem Solver

export default function Skill() {
    return (
        <div className="Skills">
            <span className="title" style={{ width: "fit-content", margin: "0 auto" }}>
                <div className="headingBG" id="blue"><div className="headingBG" id="red"></div></div>
                    SKILLS
            </span>
            <ul className="HardSkills">
                <li>
                    <div className="sector"><img src="src/static/python.png"></img></div>
                </li>
                <li>
                    <div className="sector"><img src="src\static\js.png"></img></div>
                </li>
                <li>
                    <div className="sector"><img src="src\static\physics.png"></img></div>
                </li>
                <li>
                    <div className="sector"><img src="src\static\flutter.png"></img></div>
                </li>
                <li>
                    <div className="sector"><img src="src\static\flask.png"></img></div>
                </li>
                <li>
                    <div className="sector"><img src="src\static\html&css.png"></img></div>
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
                        <img src="src\static\organization_10822618.png"></img></div>
                </li>
                <li>
                    <div className="sector">
                        <img src="src\static\effective-communication_16743787.png"></img></div>
                </li>
                <li>
                    <div className="sector">
                        <img src="src\static\working-time_10635269.png"></img></div>
                </li>
                <li>
                    <div className="sector">
                        <img src="src\static\creativity.png"></img></div>
                </li>
                <li>
                    <div className="sector">
                        <img src="src\static\flexibility.png"></img></div>
                </li>
                <li>
                    <div className="sector">
                        <img src="src\static\microphone.png"></img></div>
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
