import React from "react";
import FlexColumn from "./FlexColumn";
import FlexRow from "./FlexRow";
import Bubble from "../Assets/bubble.png";
import Container from "./Container";
import { useEffect, useState } from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Artist"];
  const period = 1000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 1.5);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Container id="hero">
      <FlexRow style={{ margin: "1rem 3rem" }}>
        <FlexColumn style={{ justifyContent: "center", margin: "1.5rem" }}>
          <FlexRow
            style={{
              backgroundColor: `var(--accent)`,
              padding: "0.5rem 2rem",
              borderRadius: "5px",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "1rem",
              width: "60%",
            }}
          >
            <span
              role="img"
              aria-label="namaste"
              style={{
                backgroundColor: "transparent",
                color: "var(--text-primary)",
              }}
            >
              👋&nbsp;
            </span>
            Namaste!
          </FlexRow>
          <span
            className="font_main"
            style={{ fontSize: "3rem", marginBottom: "1rem" }}
          >
            Bharath Gowda L
          </span>
          <span
            style={{ marginBottom: "1rem", backgroundColor: "transparent" }}
          >
            <div
              className="txt-rotate"
              data-period="2000"
              style={{ height: "30px" }}
            >
              <span className="wrap" style={{ fontSize: "1.5rem" }}>
                {text}_
              </span>
            </div>
          </span>
          <FlexRow style={{ justifyContent: "start", marginBottom: "1rem" }}>
            <BsLinkedin
              style={{
                marginRight: "1rem",
                borderRadius: "20px",
                color: "var(--text-primary)",
              }}
            />

            <BsGithub
              style={{
                color: "var(--text-primary)",
              }}
            />
          </FlexRow>
        </FlexColumn>
        {/* <motion.div
          animate={{
            scale: [0.5, 1, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        > */}
        <div id="hero_img" style={{ cursor: "pointer" }} />
        {/* </motion.div> */}
        {/* <div
          className="bubble"
          style={{
            position: "absolute",
            top: "40px",
            backgroundColor: "transparent",
            right: "250px",
          }}
        >
          <img
            src={Bubble}
            width="500px"
            style={{
              backgroundColor: "transparent",
              opacity: "0.5",
            }}
          />
          <pre
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              top: "50px",
              right: "50px",
              fontSize: "2rem",
            }}
          >
            <div
              style={{
                backgroundColor: "transparent",
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              Hello!...
            </div>
            <div
              style={{
                backgroundColor: "transparent",
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              Being a full stack Dev. and a Self-taught
            </div>
            <div
              style={{
                backgroundColor: "transparent",
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              artist, I am always eager to pick up new
            </div>
            <div
              style={{
                backgroundColor: "transparent",
                fontSize: "1.2rem",
                color: "white",
              }}
            >
              technologies or any skills for that reason...
            </div>
          </pre>
        </div> */}
        {/* </div> */}
      </FlexRow>
      <FlexRow
        style={{ width: "100%", justifyContent: "center", margin: "2rem" }}
      >
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <button
            style={{
              padding: "0.5rem 1.5rem",
              backgroundColor: "var(--text-secondary)",
              borderRadius: "50px",
              fontWeight: "bolder",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            DOWNLOAD CV
          </button>
        </motion.div>
      </FlexRow>
    </Container>
  );
};

export default Hero;
