import React, { useState } from "react";

const Search = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleSub = (e) => {
    e.preventDefault();
    if (input.length > 0) {
      handleSearch(input);
      setInput("");
    }
  };
  return (
    <form
      onSubmit={handleSub}
      className="p-6 flex gap-2 w-full justify-center items-center"
    >
      <input
        type="text"
        placeholder="city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="outline-dotted outline-0 outline-sky-600 p-2 flex-1 rounded-md shadow-lg focus:outline-1 focus:shadow-none md:w-3/6 md:flex-none"
      />
      <button className="search_btn">search</button>
    </form>
  );
};

export default Search;
