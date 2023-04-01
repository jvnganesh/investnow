import React, { useState } from "react";

function RoboAdvisoryForm() {
  const [goals, setGoals] = useState("");
  const [risk, setRisk] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // send the user's input to the backend server to generate a diversified portfolio
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Financial Goals:
        <input type="text" value={goals} onChange={(e) => setGoals(e.target.value)} />
      </label>
      <label>
        Risk Tolerance:
        <input type="text" value={risk} onChange={(e) => setRisk(e.target.value)} />
      </label>
      <button type="submit">Generate Portfolio</button>
    </form>
  );
}

export default RoboAdvisoryForm;
