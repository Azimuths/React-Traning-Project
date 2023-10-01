import React from 'react';

interface RollListProps {
  rollArray: number[];
}

const RollList: React.FC<RollListProps> = ({ rollArray }) => {
  return (
    <div className="rolls">
      <ul>
        {rollArray.map((rolledNumber, index) => (
          <li key={index}>{rolledNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default RollList;
