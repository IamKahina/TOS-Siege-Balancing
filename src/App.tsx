import React, { useState } from "react";
import './App.css';

function App() {
  // const [defender, setDefender] = useState(0);
  // const constant = 12;
  const defender = 50; // Max amount of defending players in a siege.
  const [numberDefenderFactions, setNumberDefenderFactions] = useState(1);
  const [attacker, setAttacker] = useState(3);
  const [maximumNumberDefenders, setMaximumNumberDefenders] = useState("5");
  const [minimumNumberDefenders, setMinimumNumberDefenders] = useState(" ");
  const [jonkler, setJonkler] = useState(false);

  const calculateConstant = (value: number) => {
    if (value >= 7) {
      return 20;
    }
    return Math.pow(1.5, value) + 1;
  };

  const calculateMaximumNumberDefenders = (c: number, d: number, a: number) => {
    const term1 = c * Math.log10(d / (a + (d / (Math.pow(10, d / c) - 1))));
    const term2 = c * Math.log10(d / (d + (d / (Math.pow(10, d / c) - 1))));
    const resultValue = Math.ceil(term1 - term2 + a);
    return resultValue;
  };

  const calculateMinimumNumberDefenders = (numberDefenderFactions: number) => {
    return 3 + ((numberDefenderFactions - 1) * 2);
  }

  const handleMinimumDefendersInputChange = (value: number) => {
    if (value <= 2) {
      setNumberDefenderFactions(3);
    } else {
      setNumberDefenderFactions(value);
    }

    const calculatedMinimumNumberDefenders = calculateMinimumNumberDefenders(value);
    setMinimumNumberDefenders(String(calculatedMinimumNumberDefenders));
  };

  const handleInputChange = (value: number, defenderFactions: number) => {
    if (value < 3) {
      value = 3;
    }

    if (value > 50) {
      value = 50;
    }

    setAttacker(value);

    if (defenderFactions <= 1) {
      setNumberDefenderFactions(1);
    } else {
      setNumberDefenderFactions(defenderFactions);
    }

    let constant = 0;
    const potency = 2
    if (defenderFactions > 5) {
      constant = 5 ** potency;
    }
    else {
      constant = defenderFactions ** potency;
    }

    const calculatedMaximumNumberDefenders = calculateMaximumNumberDefenders(constant, defender, value);
    setMaximumNumberDefenders(String(calculatedMaximumNumberDefenders));
  };

  return (
    <div className="calculator-container">
      <h2>Faction Battle Calculator</h2>

      <div className="inputs">
        <div className="input-group">
          <label>Number of attacker players in the Siege</label>
          <input
            type="number"
            value={attacker}
            onChange={(e) => {
              setAttacker(Number(e.target.value));
              handleInputChange(Number(e.target.value), numberDefenderFactions);
            }}
          />
        </div>
        <div className="input-group">
          <label>Number of defending factions in the Siege</label>
          <input
            type="number"
            width="200px"
            value={numberDefenderFactions}
            onChange={(e) => {
              setNumberDefenderFactions(Number(e.target.value));
              handleInputChange(attacker, Number(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="result">
        <h2>Maximum Number of Defenders: {maximumNumberDefenders}</h2>
      </div>
      <button
        className="jonkler-button"
        onClick={() => setJonkler(true)}
      >
      </button>
      <div className="jonkler">
        {jonkler && <img src="https://tr.rbxcdn.com/7dad4b53afdc6c78b2381538183eb59d/420/420/Hat/Webp" alt="Jonkler" />}
      </div>
    </div>
  );
}

export default App;
