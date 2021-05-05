import React from "react";

const Card = ({ icon, title, text, link }) => {
  return (
    <div>
      <div className="">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
        <a href="">{link}</a>
      </div>
    </div>
  );
};

export default Card;
