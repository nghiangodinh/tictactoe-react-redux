import React from "react";
import PropTypes from "prop-types";
import { Symbol } from "./blankSymbol";

const OSymbol = props => {
  return (
    <Symbol className={`symbol column${props.position}`}>
      <svg viewBox="0 0 56 56">
        <circle
          cx={28}
          cy={28}
          r={20}
          stroke="black"
          strokeWidth="1"
          fill="black"
        />
      </svg>
    </Symbol>
  );
};

OSymbol.propTypes = {
  position: PropTypes.number.isRequired
};

export default OSymbol;
