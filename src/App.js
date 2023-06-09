import React from 'react';
import Characters from './components/Character';
import styled from 'styled-components';
import Details from './components/Details';



const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters />
    </div>
  );
}

export default App;
