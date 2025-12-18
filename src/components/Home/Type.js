import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ textAlign: "center", fontSize: "1.5em" }}>
      <Typewriter
        options={{
          strings: ["Technical Analyst"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
