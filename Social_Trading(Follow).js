import React from "react";

function Follow({ investor, onFollow }) {
  return (
    <div>
      <h3>{investor.name}</h3>
      <p>{investor.strategy}</p>
      <button onClick={onFollow}>Follow</button>
    </div>
  );
}

export default Follow;
