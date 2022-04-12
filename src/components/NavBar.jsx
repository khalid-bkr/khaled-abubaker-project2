import React from "react";
import WordleModal from "./WordleModal";
import { useSelector, useDispatch } from "react-redux";
import { setModalShow } from "../reducers/modalShowReducer";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const statistics = useSelector((state) => state.gameStatistics.value);
  const modalShow = useSelector((state) => state.modalShow.value);
  const dispatch = useDispatch();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className="navbar-section"
      >
        <Container>
          <Link to={"/"}>
            <Navbar.Brand>
              WORDLE <strong>EXTRA</strong>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link onClick={() => dispatch(setModalShow(true))}>
                Statistics
              </Nav.Link>
              <Nav.Link as={Link} to={"/Rules"}>
                Rules
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <WordleModal
          show={modalShow}
          modalheading={"Statistics"}
          modaltitle={statistics}
          modalinfo={statistics}
          onHide={() => dispatch(setModalShow(false))}
        ></WordleModal>
      </Container>
    </>
  );
};

export default NavBar;
