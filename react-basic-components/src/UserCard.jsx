import React from "react";
import './card.css';

function UserCard({ userdata }) {
  const { name } = userdata
  console.log(name);
  return (
    <div className="card">
      <h2 className="name">{userdata.name ? userdata.name : 'User name'}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{userdata.age ? userdata.age : 'User Age'}</div>
        <div className="label">Phone:</div>
        <div>{userdata.phoneNumber ? userdata.phoneNumber : 'User phoneNumber'}</div>
        <div className="label">Address:</div>
        <div>{userdata.address ? userdata.address : 'User address'}</div>
      </div>
    </div>
  );
}

export default UserCard;
