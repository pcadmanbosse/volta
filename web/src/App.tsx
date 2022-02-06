import React from 'react';
import Clock from './components/Clock';
import ClockContextProvider from './contexts/ClockContext';

function App() {
  return (
    <div className="App">
      <ClockContextProvider >
        <Clock />
      </ClockContextProvider>
    </div>
  );
}

export default App;
