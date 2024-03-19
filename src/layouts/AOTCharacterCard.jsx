import React from "react";

function AOTCharacterCard(props) {
  const data = props.data;
  return (
    <div className="aot-character">
      <h4>{}</h4>
      <img src={"#"} />
      <p>Age: {}</p>
      <p>Gender: {}</p>
      <p>Occupation: {}</p>
    </div>
  );
}

export default AOTCharacterCard;
