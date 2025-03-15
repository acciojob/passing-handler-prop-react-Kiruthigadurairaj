import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, label } = config; // Ensure label is extracted

  return (
    <button
      className="color-button"
      style={{
        backgroundColor: background,
        color: "white",
        padding: "10px",
        margin: "5px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => selectNextBackground({ background })} // Ensure it's passed as an object
    >
      {label}
    </button>
  );
};

export default ColourSelector;
