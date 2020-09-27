import React from 'react';

import FlightsSearchEngine from './FlightsSearchEngine';

export default function Main() {
  return (
    <React.Fragment>
      <h3 className="header text-center">
        Flight Search Engine
      </h3>
      <div className="container">
        <FlightsSearchEngine />
      </div>
    </React.Fragment>
  );
}
