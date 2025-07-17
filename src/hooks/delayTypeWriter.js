import { useState, useEffect } from 'react';
import Typewriter from './Typewriter';

const messages = [
  "Front End Developer",
  "UI Design",
  "AI Enthusiast"
];

export default function WhoAmITypewriter() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < messages.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, 500); // delay in ms
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <span className="who_am_i">
      {messages.slice(0, visibleCount).map((msg, idx) => (
        <><Typewriter key={idx} text={msg} /><br /></>
      ))}
    </span>
  );
}