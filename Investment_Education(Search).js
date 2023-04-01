import React from "react";

function Search({ onSearch }) {
  return (
    <div>
      <h2>Search</h2>
      <input type="text" placeholder="Search for an investment topic" onChange={onSearch} />
    </div>
  );
}

export default Search;
