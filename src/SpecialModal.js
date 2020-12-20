import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import { reducer1, reducer2, reducer3, reducer4, c1 } from "./actions/dragger";
import useSound from "use-sound";

import boopSfx from "./error.wav";
import yes from "./yes.mp3";
import "./Modals.css";

function SpecialModal({
  changeTeam,
  team1,
  team2,
  team3,
  team4,
  data,
  reducer1,
  reducer2,
  reducer3,
  reducer4,
  c1,
}) {
  const [play] = useSound(boopSfx);
  const [play1] = useSound(yes);
  const [show, setShow] = useState(false);
  const [tries, setTries] = useState(1);
  const [value, setValue] = useState("Reveal");
  const [teamPoints, setTeamPoints] = useState("");
  const [points] = useState(data.points);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleSubmit = (e) => {
  //   changeTeam();
  //   if (data.points !== 1200) {
  //     if (data.answer === newValue) {
  //       setTries(0);
  //       play1();
  //       handlePress();
  //       if (TeamPlaying === team1) {
  //         e.persist();

  //         reducer1(data.points);
  //       } else if (TeamPlaying === team2) {
  //         e.persist();
  //         reducer2(data.points);
  //       } else if (TeamPlaying === team3) {
  //         e.persist();
  //         reducer3(data.points);
  //       } else if (TeamPlaying === team4) {
  //         e.persist();
  //         reducer4(data.points);
  //       }
  //     } else {
  //       {
  //         play();
  //         if (tries == 1) {
  //           handlePress();
  //         }
  //         setTries(tries - 1);
  //       }
  //     }
  //   } else {
  //     if (data.answer === newValue) {
  //       play1();
  //       handlePress();
  //       if (TeamPlaying === team1) {
  //         e.persist();

  //         reducer1(data.points);
  //       } else if (TeamPlaying === team2) {
  //         e.persist();
  //         reducer2(data.points);
  //       } else if (TeamPlaying === team3) {
  //         e.persist();
  //         reducer3(data.points);
  //       } else if (TeamPlaying === team4) {
  //         e.persist();
  //         reducer4(data.points);
  //       }
  //     } else {
  //       {
  //         play();

  //         handlePress();
  //         if (TeamPlaying === team1) {
  //           e.persist();

  //           reducer1(-800);
  //         } else if (TeamPlaying === team2) {
  //           e.persist(-800);
  //           reducer2(data.points);
  //         } else if (TeamPlaying === team3) {
  //           e.persist(-800);
  //           reducer3(data.points);
  //         } else if (TeamPlaying === team4) {
  //           e.persist(-800);
  //           reducer4(data.points);
  //         }
  //       }
  //     }
  //   }
  // };
  const handlePress = () => {
    setTries(0);
    c1();
  };
  const handleValue = () => {
    setValue(data.answer);
  };
  const handleTeam1 = () => {
    setTeamPoints(team1);
  };
  const handleTeam2 = () => {
    setTeamPoints(team2);
  };
  const handleTeam3 = () => {
    setTeamPoints(team3);
  };
  const handleTeam4 = () => {
    setTeamPoints(team4);
  };
  return (
    <>
      {tries !== 0 ? (
        <Card
          className={`outliners z${points}-size hover1`}
          onClick={handleShow}
        >
          <Card.Title className="fonty hover2">{data.points}</Card.Title>
        </Card>
      ) : (
        <Card className={`outliners z${points}-size`} bg="transparent">
          <small bg="dark" className="text-muted no-wrapper">
            Complete
          </small>
        </Card>
      )}
      <Modal
        className="sizer"
        style={{
          backgroundImage: `url(${data.background_image})`,
        }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>{data.question}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fonty">
          {" "}
          <div onClick={handleValue}>{value}</div>
        </Modal.Body>
        <Modal.Footer>
          <div className="spaceside">
            <div className="spaceit">
              {" "}
              <Button onClick={handleTeam1} variant="white">
                {team1}
              </Button>
            </div>
            <div className="spaceit">
              {" "}
              <Button onClick={handleTeam2} variant="white">
                {team2}
              </Button>
            </div>{" "}
            <div className="spaceit">
              {" "}
              <Button onClick={handleTeam3} variant="white">
                {team3}
              </Button>
            </div>{" "}
            <div className="spaceit">
              {" "}
              <Button onClick={handleTeam4} variant="white">
                {team4}
              </Button>
            </div>
          </div>
          <br />
          <div>
            <Button variant="dark">-{points / 2}</Button>{" "}
            <Button variant="dark">+{points}</Button>{" "}
          </div>
          <Button variant="primary" onClick={handleClose}>
            <div onClick={handlePress}>Close</div>
          </Button>
        </Modal.Footer>
      </Modal>{" "}
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    reducer1: (points) => reducer1(points, dispatch),
    reducer2: (points) => reducer2(points, dispatch),
    reducer3: (points) => reducer3(points, dispatch),
    reducer4: (points) => reducer4(points, dispatch),
    c1: () => c1(dispatch),
    // reducer1: (points) => reducer1(points, dispatch),
    // reducer2: (points) => reducer2(points, dispatch),
    // reducer3: (points) => reducer3(points, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(SpecialModal);
