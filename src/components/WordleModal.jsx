import React from "react";
import { useDispatch } from "react-redux";
import { restartGame } from "../reducers/restartReducer";
import { Modal, Button } from "react-bootstrap";
import { useParams } from "react-router";

const WordleModal = (props) => {
  const dispatch = useDispatch();
  const { difficulty } = useParams();

  const handleRestart = () => {
    dispatch(restartGame(true));
    props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="d-flex flex-column justify-content-center align-items-center modal-style">
          <Modal.Title id="contained-modal-title-vcenter">
            {props.modalheading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column justify-content-center align-items-center modal-style">
          <h4>{difficulty ? props.modaltitle.title : "Latest statistics"} </h4>
          <div className="d-flex justify-content-center align-itmes-cenetr">
            <p className="statistic-box">Played: {props.modalinfo.played}</p>
            <p className="statistic-box">Streak: {props.modalinfo.streak}</p>
            <p className="statistic-box">
              Max Streak: {props.modalinfo.maxStreak}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between modal-style">
          {difficulty && (
            <Button className="play-btn" onClick={handleRestart}>
              Play Again!
            </Button>
          )}
          <Button className="close-btn" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WordleModal;
