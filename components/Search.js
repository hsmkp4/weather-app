import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    handleSearch(input);
  };
  return (
    <form onSubmit={handleSub}>
      <label>
        <input
          type="text"
          placeholder="city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      <button>search</button>
    </form>
  );
};

export default Search;
