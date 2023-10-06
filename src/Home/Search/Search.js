import { useState, useEffect, useMemo } from "react";
import debouce from "lodash.debounce";

const fruits = [
  "apple",
  "orange",
  "banana",
  "pear",
  "grapefruit",
  "peach",
  "apricot",
  "nectarine",
  "plum",
  "mango",
  "strawberry",
  "blueberry",
  "kiwi",
  "passionfruit",
  "raspberry",
  "watermelon"
];

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  let listToDisplay = fruits;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderFruitList = () => {
    return listToDisplay.map((fruit, i) => <p key={i}>{fruit}</p>);
  };

  if (searchTerm !== "") {
    listToDisplay = fruits.filter((fruit) => {
      return fruit.includes(searchTerm);
    });
  }

  const debouncedResults = useMemo(() => {
    return debouce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <div className="App">
      <h1>Fruit Stand</h1>
      <input type="text" onChange={debouncedResults} />
      {renderFruitList()}
    </div>
  );
}

export default Search;