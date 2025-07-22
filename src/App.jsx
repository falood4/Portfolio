import Welcome from './components/Welcome.jsx'
import Threads from './components/Threads';
import Skills from './components/Skills.jsx'

export default function App() {
    return (
        <div>
            <Welcome />
            <Threads amplitude={1.25} distance={1.2} enableMouseInteraction={false} />
            <Skills />
        </div>
    )
}