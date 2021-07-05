import React from "react";

import "./JazzyButton.css";

const JazzyButton = (props) => {
  return (
    <section>
      <button data-hover={props.fact}>
        <div>{props.name}</div>
      </button>
    </section>
  );
};

export default JazzyButton;
