import { useRef, useEffect } from "react";

export default function Carousel() {

    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        function Rotatecarousel() {
            let fg = document.getElementsByClassName("foreground")[0];
            let bg1 = document.getElementsByClassName("background1")[0];
            let bg2 = document.getElementsByClassName("background2")[0];
            let mg1 = document.getElementsByClassName("midground1")[0];
            let mg2 = document.getElementsByClassName("midground2")[0];

            bg1.classList.remove("background1");
            bg1.style.transition = "top 1s ease-in-out, left 1s ease-in-out, transform 1s";
            bg1.style.transform = "scale(100%)";
            bg1.style.top = "76px";
            bg1.style.left = "66px";
            bg1.classList.add("midground1");

            mg1.classList.remove("midground1");
            mg1.style.transition = "top 1s ease-in-out, left 1s ease-in-out, transform 1s";
            mg1.style.transform = "scale(120%)";
            mg1.style.top = "152px";
            mg1.style.left = "425px";
            mg1.classList.add("foreground");

            fg.classList.remove("foreground");
            fg.style.transition = "top 1s ease-in-out, left 1s ease-in-out, transform 1s ";
            fg.style.transform = "scale(100%)";
            fg.style.top = "76px";
            fg.style.left = "784px";
            fg.classList.add("midground2");

            mg2.classList.remove("midground2");
            mg2.style.transition = "top 1s ease-in-out, left 1s ease-in-out, transform 1s";
            mg2.style.transform = "scale(80%)";
            mg2.style.top = "0px";
            mg2.style.left = "626px";
            mg2.classList.add("background2");

            bg2.classList.remove("background2");
            bg2.style.transition = "top 1s ease-in-out, left 1s ease-in-out, transform 1s";
            bg2.style.transform = "scale(80%)";
            bg2.style.top = "0px";
            bg2.style.left = "228px";
            bg2.classList.add("background1");

        }
        if (carousel) {
            carousel.addEventListener("click", Rotatecarousel);
        }
        return () => {
            if (carousel) {
                carousel.removeEventListener("click", Rotatecarousel);
            }
        };
    }, []);

    return (
        <div className="img-carousel" ref={carouselRef}>
            <div className="background1" id="card1">
                <div className="flip-card-front">
                    <img src='src\static\Empress-0.png' alt="card3" />
                </div>
                <div className="flip-card-back">
                    <img src='src\static\LINGOJINGO.png' alt="card1" />
                </div>
                <div className="gitLink">
                    <a href="https://github.com/falood4/LINGOJINGO/" target="_blank"
                        rel="noopener noreferrer"></a>
                </div>
            </div>
            <div className="midground1" id="card2">
                <div className="flip-card-front">
                    <img src='src\static\Priestess-0.png' alt="card2" />
                </div>
                <div className="flip-card-back">
                    <img src='src\static\falood4wrks.png' alt="card1" />
                </div>
                <div className="gitLink">
                    <a href="https://github.com/falood4/falood4WRKS/" target="_blank"
                        rel="noopener noreferrer"></a>
                </div>
            </div>
            <div className="foreground" id="card3">
                <div className="flip-card-front">
                    <img src='src\static\Magician-0.png' alt="card1" />
                </div>
                <div className="flip-card-back">
                    <img src='src\static\calorease.png' alt="card1" />
                </div>
                <div className="gitLink">
                    <a href="https://github.com/HeinzPaul/Calorease/" target="_blank"
                        rel="noopener noreferrer"></a>
                </div>
            </div>
            <div className="midground2" id="card4">
                <div className="flip-card-front">
                    <img src='src\static\Hierophant-0.png' alt="card5" />
                </div>
                <div className="flip-card-back">
                    <img src='src\static\upscaler.png' alt="card1" />
                </div>
                <div className="gitLink">
                    <a href="https://github.com/falood4/4kVideoUpscaler" target="_blank"
                        rel="noopener noreferrer"></a>
                </div>
            </div>
            <div className="background2" id="card5">
                <div className="flip-card-front">
                    <img src='src\static\Emperor-0.png' alt="card4" />
                </div>
                <div className="flip-card-back">
                    <img src='src\static\qbus.png' alt="card1" />
                </div>
                <div className="gitLink">
                    <a href="https://github.com/abelgeostan/QBus" target="_blank"
                        rel="noopener noreferrer"></a>
                </div>
            </div>
        </div>
    );
}