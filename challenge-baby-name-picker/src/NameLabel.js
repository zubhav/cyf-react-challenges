import React from "react";

const NameLabel = ({ sex, onClick, name }) => {
  const isMale = sex === "m";
  const bgColor = isMale ? "#9fcfee" : "#fcc6e5";
  const color = isMale ? "#225a83" : "#a21c63";

  return (
    <li
      style={{
        backgroundColor: bgColor,
        borderRadius: "3px",
        color: color,
        cursor: "pointer",
        margin: "2px",
        padding: "3px",
      }}
      onClick={onClick || null}
    >
      {name}
    </li>
  );
};

export default NameLabel;
