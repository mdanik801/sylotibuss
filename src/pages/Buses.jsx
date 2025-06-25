
import React, { useEffect, useState } from 'react';
import buses from '../data/buses.json';

const Buses = () => {
  return (
    <div>
      <h2>All Buses</h2>
      <ul>
        {buses.map(bus => (
          <li key={bus.id}>
            <strong>{bus.name}</strong> ({bus.number}) - Route: {bus.route.join(" ➝ ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buses;
