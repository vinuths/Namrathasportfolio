import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="typewriter-container">
      <Typewriter
        options={{
          strings: ["Technical Analyst"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 75,
        }}
      />

      {/* Responsive styles */}
      <style jsx>{`
        .typewriter-container {
          width: 100%;
          text-align: center;
          overflow: hidden;
        }

        .typewriter-container span {
          display: inline-block;
          white-space: normal;
          word-break: break-word;
          font-size: clamp(1.1rem, 4vw, 1.6rem);
          line-height: 1.4;
        }
      `}</style>
    </div>
  );
}

export default Type;
