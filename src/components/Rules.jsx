import React from "react";
import { Image } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Rules = () => {
  return (
    <Container>
      <div className="page-heading">
        <h2 className="rule-page-title">
          WORDLE{" "}
          <span className="sub-heading-style">
            <strong>EXTRA</strong>
          </span>
        </h2>
      </div>
      <hr />
      <div className="d-flex flex-column justify-content-start align-items-start">
        <h4 className="rule-title">Game Rules:</h4>
        <ul className="rules-list">
          <li className="">
            Guess the hidden word in a number of tries depending on the
            difficulty picked.
          </li>
          <li>
            Each guess must be a valid english word, you cannot enter random
            letters. Hit the enter button to submit the guess.
          </li>
          <li>
            After your submission, the color of the tiles will change as in the
            examples below.
          </li>
        </ul>
      </div>
      <hr />
      <div className="examples d-flex flex-column align-items-start">
        <h4 className="rule-title">Examples</h4>
        <ul className="d-flex flex-column examples-list">
          <li>
            <Image src="/images/ex1.png" className="example-img" />
            <p>
              The letter <span className="picked-letter green">A</span> is in
              the word and in the correct spot.
            </p>
          </li>
          <li>
            <Image src="/images/ex2.png" className="example-img" />
            <p>
              The letter <span className="picked-letter yellow">H</span> is in
              the word but in the wrong spot.
            </p>
          </li>
          <li>
            <Image src="/images/ex3.png" className="example-img" />
            <p>
              The letters <span className="picked-letter">R</span> and{" "}
              <span className="picked-letter">I</span> are not in the word in
              any spot at all.
            </p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Rules;
