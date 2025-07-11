export default function App() {
    return (
        <div>
            <div className="short-intro">
                <span className="hi">Hi I'm</span><br />
                <span className="name">KURIEN S<br />NAKKARA</span><br />
                <span className="who_am_i">Front End Developer<br />
                    UI Design <br />
                    AI enthusiast</span>
            </div>

            <svg className="circleborder" width="1200" height="1200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#66b2ff" />
                        <stop offset="20%" stop-color="#66b2ff" />
                        <stop offset="100%" stop-color="#001f4d" />
                    </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="none" stroke="url(#ringGradient)" stroke-width="20" />
            </svg>
        </div>
    )
}