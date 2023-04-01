import React from "react";

function Leaderboard({ investors }) {
  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Investor</th>
            <th>Performance</th>
          </tr>
        </thead>
        <tbody>
          {investors.map((investor, index) => (
            <tr key={investor.id}>
              <td>{index + 1}</td>
              <td>{investor.name}</td>
              <td>{investor.performance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}