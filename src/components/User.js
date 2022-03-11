import React from "react";
import Img from "../bovas.jpeg";

export const User = ({ user, selectUser }) => {
  return (
    <div className="user_wrapper" onClick={() => selectUser(user)}>
      <div className="user_info">
        <div className="user_detail">
          <img src={user.avatar || Img} alt="avatar" className="avatar" />
          <h4>{user.name}</h4>
          <h4>{user.attending}</h4>
        </div>
        <div
          className={`user_status ${user.isOnline ? "online" : "offline"}`}
        />
      </div>
    </div>
  );
};
