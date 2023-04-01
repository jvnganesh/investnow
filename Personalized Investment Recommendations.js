import React, { useState } from "react";

function RecommendationForm() {
  const [goals, setGoals] = useState("");
  const [risk, setRisk] = useState("");
  const [history, setHistory] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // send the user's input to the backend server to get recommendations
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
      <label>
        Investment History:
        <input type="text" value={history} onChange={(e) => setHistory(e.target.value)} />
      </label>
      <button type="submit">Get Recommendations</button>
    </form>
  );
}

export default RecommendationForm;