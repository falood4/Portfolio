import Welcome from './components/Welcome.jsx'
import Threads from './components/Threads';
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx';
import Socials from './components/Socials.jsx';

export default function App() {
    return (
        <div>
            <Welcome />
            <div className='bio'>
                <p>I am a B.Tech Information Technology student with skill and passion for computers, programming and AI</p>

                I am proficient in React, CSS, JavaScript and Flutter to build applications and websites powered by Flask, MongoDB and NodeJs
                in the back end. I utilise Photoshop, Canva and Figma to design interactive and attrative UI and design
                My expertise in full stack development and UI design is complemented by a strong foundation in editing and videography,
                with experience in Adobe and DaVinci Resolve.
                <p>I thrive in collaborative team environments and am eager to contribute my blend of technical and creative talents
                    to a forward-thinking company.
                    I am actively seeking an internship or entry-level opportunity where I can apply my skills to design, develop, and
                    implement impactful software applications.
                </p>

            </div>
            <Skills />
            <Projects />
            <Socials />
        </div>
    )
}
