import { useState, useEffect } from 'react';
import border from '../static/circleborder.png';
import Typewriter from './Typewriter';

export default function App() {
    const [hovered, setHovered] = useState(false);
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (step < 3) {
            const timer = setTimeout(() => setStep(step + 1), 300); // Adjust delay as needed
            return () => clearTimeout(timer);
        }
    }, [step]);

    return (
        <div className='Welcome'>
            <div className="short-intro">
                <span className="hi">Hi I'm</span><br />
                <span className='hoverme'>hover me</span>
                <span className="title"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {hovered ? <a className='glitchGithub' href='https://github.com/falood4'>@falood4</a> : <>KURIEN S<br />NAKKARA</>}
                </span><br />
                <span className="who_am_i">
                    {step > 0 && <Typewriter text="Front End Developer" />}
                    {step > 1 && <><br /><Typewriter text="UI Designer" /></>}
                    {step > 2 && <><br /><Typewriter text="AI Enthusiast" /></>}
                </span>
            </div>

            <img className="circleborder" src={border} />

        </div>

    );
}