import React from 'react';

interface ElectrumSectionProps {
  electrumPrice: number;
  previousElectrumPrice: number;
  currentMultiplier: number;
}

const ElectrumSection: React.FC<ElectrumSectionProps> = ({
  electrumPrice,
  previousElectrumPrice,
  currentMultiplier,
}) => {
  return (
    <div className="electrum-section">
      <p>Electrum Price: {electrumPrice}</p>
      <p>Previous Electrum Price: {previousElectrumPrice}</p>
      <p>Current Multiplier: {currentMultiplier}</p>
    </div>
  );
};

export default ElectrumSection;
