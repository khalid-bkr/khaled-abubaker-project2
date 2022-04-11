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
          <div className="d-flex justify-content-center align-items-center card">
            <p>
              <Link to={`/Game/easy`}>Easy</Link>
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center card">
            <p>
              <Link to={`/Game/medium`}>Medium</Link>
            </p>
          </div>
          <div className="d-flex justify-content-center align-items-center card">
            <p>
              <Link to={`/Game/hard`}>Hard</Link>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
