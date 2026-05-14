import React, { useEffect, useState } from 'react';

const TypewriterText = ({
  text,
  speed = 35,
  className = '',
  isActive = true,
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplayedText('');
      return;
    }

    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isActive]);

  return (
    <span className={className}>
      {displayedText}
    </span>
  );
};

export default TypewriterText;