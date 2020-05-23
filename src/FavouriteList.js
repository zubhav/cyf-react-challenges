import React from "react";
import NameLabel from "./NameLabel";

const FavouriteList = ({ favourites, items, onItemClick, setFavourites }) => {
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
        {favourites.length === 0 && <p>None</p>}
        {favourites.map((baby) => {
          const { id, name, sex } = baby;
          return (
            <NameLabel
              key={id}
              name={name}
              sex={sex}
              onClick={() => {
                onItemClick([...items, baby]);
                setFavourites(favourites.filter((item) => item.id !== baby.id));
              }}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FavouriteList;
