import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="home" fluid>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="page-heading ">
          <h1 className="heading-title ">
            WORDLE{" "}
            <span className="sub-heading-style">
              <strong>EXTRA</strong>
            </span>
          </h1>
        </div>
        <h4 className="sub-heading">Play Wordle in various difficulties!</h4>
        <div className="cards">
          <Link
            to={`/Game/easy`}
            className="d-flex justify-content-center align-items-center card"
          >
            <p>Easy</p>
          </Link>
          <Link
            to={`/Game/medium`}
            className="d-flex justify-content-center align-items-center card"
          >
            <p>Medium</p>
          </Link>
          <Link
            to={`/Game/hard`}
            className="d-flex justify-content-center align-items-center card"
          >
            <p>Hard</p>
          </Link>
        </div>
        <div className="game-rules">
          <h4>Check out the Game's rule book to learn how to play Wordle!</h4>
          <Link to={"/Rules"} className="btn rules-btn">
            Rule Book
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Home;
