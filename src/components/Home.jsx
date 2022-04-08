import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Container } from "react-bootstrap";

const Home = () => {
  const pathParams = useParams();

  /* {
        difficulty: easy/medium/hard
    }
    */
  const difficulty = pathParams.difficulty;
  return (
    <Container fluid>
      <div className="d-flexjustify-content-md-center">
        Home
        <Link to={`/App`}>Play the Game</Link>
      </div>
    </Container>
  );
};

export default Home;
