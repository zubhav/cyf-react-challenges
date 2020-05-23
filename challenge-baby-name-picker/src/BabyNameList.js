import React from "react";
import NameLabel from "./NameLabel";

const BabyNameList = ({ items, favourites, onItemClick }) => {
  return (
    <ul
      style={{
        display: "flex",
        listStyleType: "none",
        flexWrap: "wrap",
      }}
    >
      {items.length === 0 && <p>No names found</p>}

      {items.length > 0 &&
        items.map((baby) => {
          const { id, name, sex } = baby;

          const alreadyFavourited = favourites.find((baby) => id === baby.id);
          const onLabelClick = !alreadyFavourited
            ? () => onItemClick([...favourites, baby])
            : null;

          return (
            <NameLabel key={id} name={name} sex={sex} onClick={onLabelClick} />
          );
        })}
    </ul>
  );
};

export default BabyNameList;
