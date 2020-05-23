import React from "react";

const SearchField = ({ onChange }) => {
  return (
    <input
      name="search"
      type="text"
      placeholder="Search..."
      style={{
        bordeRadius: "4px",
        width: "200px",
        height: "30px",
        padding: "3px",
      }}
      onChange={onChange}
    />
  );
};

export default SearchField;
