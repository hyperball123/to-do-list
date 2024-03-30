import React, { useState, useEffect } from "react";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setDisplayedText(text.substring(0, currentIndex + 1));
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 300); // Adjust typing speed as needed

    return () => clearInterval(typingInterval);
  }, [currentIndex, text]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;
