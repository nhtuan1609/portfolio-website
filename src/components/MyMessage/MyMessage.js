import "./MyMessage.css";
import React from "react";
import Typewriter from "typewriter-effect";

export default function MyMessage() {
  return (
    <div className="message">
      <div className="message-heading">
        <div className="message-title">
          Hi, I am
          <br />
          <span>
            <strong>Tuan</strong>
          </span>
        </div>
        <div className="message-sub">
          <Typewriter
            options={{
              strings: ["Web Developer", "Coach", "Learner"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  );
}
