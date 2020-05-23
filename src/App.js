import React, { useState } from "react";
import babyNamesData from "./babyNamesData.json";
import SearchField from "./SearchField";
import FavouriteList from "./FavouriteList";
import BabyNameList from "./BabyNameList";
import GenderSelector from "./GenderSelector";

const sortArrByAttr = (arr, attr) => {
  if (!attr || !arr || arr.length === 0) return arr;

  arr.sort((a, b) => {
    if (a[attr] < b[attr]) {
      return -1;
    }
    if (a[attr] > b[attr]) {
      return 1;
    }
    return 0;
  });

  return arr;
};

const App = () => {
  const [babyNames, setBabyNames] = useState(babyNamesData);
  const [favourites, setFavourites] = useState([]);
  const [gender, setGender] = useState("a");
  sortArrByAttr(babyNames, "name"); // sort names alphabetically A-Z

  let filteredBabyNames = babyNames;
  if (gender !== "a") {
    // if gender is selected as m or f, filter the list
    filteredBabyNames = filteredBabyNames.filter((baby) => baby.sex === gender);
  }

  const onSearchChange = (e) => {
    const sanitizedInputText = e.target.value.trim().toLowerCase();

    if (!sanitizedInputText) {
      setBabyNames(babyNamesData);
    }

    const filteredNames = babyNamesData.filter((baby) => {
      return baby.name.toLowerCase().includes(sanitizedInputText);
    });

    setBabyNames(filteredNames);
  };

  const genderSelectorOptions = [
    { label: "Male", value: "m" },
    { label: "Female", value: "f" },
    { label: "All", value: "a" },
  ];

  return (
    <main>
      <section style={{ textAlign: "center" }}>
        <SearchField onChange={onSearchChange} />

        <GenderSelector
          options={genderSelectorOptions}
          value={gender}
          onChange={setGender}
        />
      </section>

      <section>
        <FavouriteList
          items={babyNames}
          favourites={favourites}
          setFavourites={setFavourites}
          onItemClick={setBabyNames}
        />
      </section>

      <hr />

      <section>
        <BabyNameList
          items={filteredBabyNames}
          favourites={favourites}
          allBabyNames={babyNames}
          setBabyNames={setBabyNames}
          onItemClick={setFavourites}
        />
      </section>
    </main>
  );
};

export default App;
