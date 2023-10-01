import React, { useState } from 'react';
import logo from './zach.jpg';
import './App.css';

function RollButton({ onRoll }: { onRoll: (newRoll: number) => void }) {
  const handleClick = () => {
    const newRoll = Math.floor(Math.random() * 19) + 1;
    onRoll(newRoll);
  };

  return (
    <button className="roll" onClick={handleClick}>
      Roll
    </button>
  );
}

function App() {
  const [rollArray, setRollArray] = useState<number[]>([]);
  const [electrumPrice, setElectrumPrice] = useState<number>(50);
  const [previousElectrumPrice, setPreviousElectrumPrice] = useState<number>(50);
  const [currentMultiplier, setCurrentMultiplier] = useState<number>(1);
  const [set1Count, setSet1Count] = useState<number>(0);
  const [set2Count, setSet2Count] = useState<number>(0);

  const handleRollClick = (newRoll: number) => {
    setRollArray(prevRolls => [...prevRolls, newRoll]);

    let priceChange = 0;

    if (newRoll >= 1 && newRoll <= 5) {
      priceChange = -3;
    } else if (newRoll >= 6 && newRoll <= 10) {
      priceChange = -1;
    } else if (newRoll >= 11 && newRoll <= 15) {
      priceChange = 1;
    } else if (newRoll >= 16 && newRoll <= 20) {
      priceChange = 3;
    }

    setPreviousElectrumPrice(electrumPrice);
    setElectrumPrice(prevPrice => prevPrice + priceChange);

    if (newRoll >= 1 && newRoll <= 10) {
      setSet1Count(prevCount => prevCount + 1);
      if (set2Count > 0) {
        setSet2Count(0);
        setCurrentMultiplier(1);
      }
    } else if (newRoll >= 11 && newRoll <= 20) {
      setSet2Count(prevCount => prevCount + 1);
      if (set1Count > 0) {
        setSet1Count(0);
        setCurrentMultiplier(1);
      }
    }

    if (newRoll === 1 || newRoll === 20 || set1Count === 3 || set2Count === 3) {
      setCurrentMultiplier(prevMultiplier => prevMultiplier * 2);
    }
  };

  const handleClearRolls = () => {
    setRollArray([]);
    setElectrumPrice(50);
    setPreviousElectrumPrice(50);
    setCurrentMultiplier(1);
    setSet1Count(0);
    setSet2Count(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="roll-section">
          <div className="rolls">
            <RollButton onRoll={handleRollClick} />
            <ul>
              {rollArray.map((rolledNumber, index) => (
                <li key={index}>{rolledNumber}</li>
              ))}
            </ul>
            <button className="clear-button" onClick={handleClearRolls}>
              Clear Rolls
            </button>
          </div>
          <div className="electrum-section">
            <p>Electrum Price: {electrumPrice}</p>
            <p>Previous Electrum Price: {previousElectrumPrice}</p>
            <p>Current Multiplier: {currentMultiplier}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
