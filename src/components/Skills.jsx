//React, JavaScript, Python, Flask and Flutter
// Team Communication and Coordination, Flexible and Constant Learner, Time Management, Creativity and Problem Solver

export default function Skill() {
    return (
        <div className="Skills">
            <span className="title" style={{ width: "fit-content", margin: "0 auto" }}>SKILLS</span>
            <ul className="HardSkills">
                <li className="Python">
                    <div className="sector"><img src="src\static\python.png"></img></div>
                </li>
                <li className="JavaScript">
                    <div className="sector"><img src="src\static\js.png"></img></div>
                </li>
                <li className="React">
                    <div className="sector"><img src="src\static\physics.png"></img></div>
                </li>
                <li className="Flutter">
                    <div className="sector"><img src="src\static\flutter.png"></img></div>
                </li>
                <li className="Flask">
                    <div className="sector"><img src="src\static\flask.png"></img></div>
                </li>
                <li className="HTML/CSS">
                    <div className="sector"><img src="src\static\html&css.png"></img></div>
                </li>
                <li className="Stick">

                </li>
            </ul>

            <ul className="SoftSkills">
                <li className="Python">
                    {/*  <img src="src\static\python.png"></img>Python */}<div className="sector">
                        Team Coordination</div>
                </li>
                <li className="JavaScript">
                    {/*  <img src="src\static\js.png"></img>JavaScript   */}<div className="sector">
                        Effective Communicater</div>
                </li>
                <li className="React">
                    {/*  <img src="src\static\physics.png"></img>React   */}<div className="sector">
                        Time Managment</div>
                </li>
                <li className="Flutter">
                    {/*  <img src="src\static\flask.png"</img>Flutter*/}<div className="sector">
                        Creativity and Intuition</div>
                </li>
                <li className="Flask">
                    {/*  <img src="src\static\flask.png"></img>Flask  */}<div className="sector">
                        Flexible and Adaptable</div>
                </li>
                <li className="HTML/CSS">
                    {/*  <img src="src\static\html&css.png"></img>HTML & CSS  */}<div className="sector">
                        English Proficieny</div>
                </li>
                <li className="Stick">

                </li>
            </ul>
        </div>
    )
}