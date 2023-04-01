import React from "react";

function Profile({ user }) {
  return (
    <div>
      <h2>Profile</h2>
      <h3>{user.name}</h3>
      <p>Investment History: {user.investmentHistory}</p>
      <p>Performance: {user.performance}</p>
    </div>
  );
}

export default Profile;