import React from 'react';

interface RollButtonProps {
  onRoll: (newRoll: number) => void;
}

const RollButton: React.FC<RollButtonProps> = ({ onRoll }) => {
  const handleClick = () => {
    const newRoll = Math.floor(Math.random() * 19) + 1;
    onRoll(newRoll);
  };

  return (
    <button className="roll" onClick={handleClick}>
      Roll
    </button>
  );
};

export default RollButton;
