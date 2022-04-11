import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <div className="d-flex flex-column justify-content-center">
        <div className="page-heading typewriter">
          <h1 className="heading-title ">
            WORDLE{" "}
            <span className="sub-heading-style">
              <strong>EXTRA</strong>
            </span>
          </h1>
          <h4 className="sub-heading">Play Wordle in various difficulties!</h4>
        </div>
        <div className="d-flex justify-content-center align-items-center cards">
          <Link to={`/Game/easy`}>
            <div className="d-flex justify-content-center align-items-center card">
              <p>Easy</p>
            </div>
          </Link>
          <Link to={`/Game/medium`}>
            <div className="d-flex justify-content-center align-items-center card">
              <p>Medium</p>
            </div>
          </Link>
          <Link to={`/Game/hard`}>
            <div className="d-flex justify-content-center align-items-center card">
              <p>Hard</p>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Home;
