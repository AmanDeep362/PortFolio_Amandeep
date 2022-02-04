import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amandeep Singh </span>
            from <span className="purple"> Yamunanagar, India.</span>
            <br />I am a Full stack Web developer Having a sufficient Knowledge of Programming . A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growth-oriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If something is important enough, even if the odds are stacked against you, you should still do it.”
          </p>
          <footer className="blockquote-footer"> Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
