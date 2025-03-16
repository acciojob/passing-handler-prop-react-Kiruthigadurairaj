import React from "react";
import "../styles/Selection.css";

const Selection = ({ applyColor }) => {
  console.log("Selection applyColor background is == ", applyColor().background);

  function helper(e) {
    e.target.style.backgroundColor = applyColor().background;
  }

  return (
    <div>
      <div className="fix-box" onClick={helper}>
        <h2>Selection</h2>
      </div>
    </div>
  );
};

export default Selection;
