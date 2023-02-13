import React from "react";
import { motion } from "framer-motion";
import Container from "./Container";
import styled from "styled-components";
import Bwself from "../Assets/bwself.jpg";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import FlexRow from "./FlexRow";
const Artist = () => {
  return (
    <Section id="artist" style={{ minHeight: "100vh", textAlign: "center" }}>
      {/* Blockchain */}
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ marginBottom: "8rem" }}
      >
        <Container style={{ padding: "2rem" }}>
          <img
            id="art_img"
            src={Bwself}
            style={{ width: "350px", borderRadius: "50%" }}
          />
          <div
            className="font_main"
            style={{
              fontSize: "2.5rem",
              lineHeight: "90%",
              marginBottom: "1.5rem",
            }}
          >
            Bharath gowda l
          </div>
          <div style={{ fontSize: "1.5rem" }}>Artist</div>
          <FlexRow style={{ justifyContent: "right" }}>
            <div
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--background)",
                width: "40px",
                height: "40px",
                padding: "10px",
                borderRadius: "50px",
              }}
            >
              <a href="https://www.instagram.com/shrikalpak/" target="blank">
                <BsInstagram style={{ width: "20px", height: "20px" }} />
              </a>
            </div>
            <div
              style={{
                backgroundColor: "var(--text-primary)",
                color: "var(--background)",
                width: "40px",
                height: "40px",
                padding: "10px",
                borderRadius: "50px",
                marginLeft: "1rem",
              }}
            >
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bharathgowdaart@gmail.com"
                target="_blank"
              >
                <FiMail style={{ width: "20px", height: "20px" }} />
              </a>
            </div>
          </FlexRow>
        </Container>
      </motion.div>
    </Section>
  );
};

export default Artist;

const Section = styled.section``;
