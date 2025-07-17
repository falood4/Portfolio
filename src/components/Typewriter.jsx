import useTypewriter from '../hooks/useTypewriter';

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <span>{displayText}</span>;
};

export default Typewriter;