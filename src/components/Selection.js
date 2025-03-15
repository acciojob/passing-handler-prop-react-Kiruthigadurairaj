import React, { useState } from "react";

const Selection = ({ applyColor }) => {
  const [boxStyle, setBoxStyle] = useState({ background: "" });

  return (
    <div
      className="fix-box"
      style={{
        backgroundColor: boxStyle.background,
        width: "100px",
        height: "100px",
        border: "2px solid white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        color: "white",
        cursor: "pointer"
      }}
      onClick={() => applyColor(setBoxStyle)} // Apply color function
    >
      Selection
    </div>
  );
};

export default Selection;

