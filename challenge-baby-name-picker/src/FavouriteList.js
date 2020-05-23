import React from "react";
import NameLabel from "./NameLabel";

const FavouriteList = ({ items }) => {
  return (
    <>
      <p>Favourites: </p>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          flexWrap: "wrap",
        }}
      >
        {items.length === 0 && <p>None</p>}
        {items.length > 0 &&
          items.map((baby) => {
            const { id, name, sex } = baby;
            return <NameLabel key={id} name={name} sex={sex} />;
          })}
      </ul>
    </>
  );
};

export default FavouriteList;
