import React from 'react';
import styled from 'styled-components';

import Board from '../containers/board';
import Result from '../containers/result';

import './app.css';

const App = ({className}) => {
  return (
    <div className={className}>
      <Result />
      <Board />
    </div>
  );
}

export default styled(App)`
  font-family: Courier New, Courier, monospace;
  margin: 0 auto;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
