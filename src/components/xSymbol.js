import React from "react";
import PropTypes from "prop-types";
import { Symbol } from "./blankSymbol";

const XSymbol = props => {
  return (
    <Symbol className={`symbol column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <line x1="7" y1="7" x2="49" y2="49" stroke="black" strokeWidth="2" />
        <line x1="7" y1="49" x2="49" y2="7" stroke="black" strokeWidth="2" />
      </svg>
    </Symbol>
  );
};

XSymbol.propTypes = {
  position: PropTypes.number.isRequired
};

export default XSymbol;
