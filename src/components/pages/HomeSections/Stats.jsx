import React from 'react';
import yardCareStats from '../../helpers/stats';
import '../../styles/Stats.css';

const Stats = () => {
  return (
    <div className="yard-states-container">
      {yardCareStats.map((state, index) => (
        <div key={index} className="yard-state">
          <img src={state.icon} alt="State Icon" className="state-icon" />
          <h4 className="state-number">{state.number}</h4>
          <p className="state-description">{state.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;
