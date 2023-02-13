import React from "react";
import styled from "styled-components";
import Container from "./Container";
import Ddd from "../Assets/ddd.png";
import Cleverb from "../Assets/cleverb.png";
import { motion } from "framer-motion";
import FlexRow from "./FlexRow";
import FlexColumn from "./FlexColumn";
const Works = () => {
  return (
    <Section
      id="works"
      style={{ minHeight: "100vh", textAlign: "center", marginBottom: "6rem" }}
    >
      <span className="heading" style={{ fontSize: "2rem" }}>
        Works
      </span>
      {/* Blockchain */}
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ marginBottom: "4rem" }}
      >
        <Container style={{ padding: " 0", textAlign: "right" }}>
          <FlexRow>
            <FlexColumn
              style={{
                width: "40%",
                textAlign: "left",
                padding: "4rem",
                justifyContent: "center",
              }}
            >
              <div
                className="font_main"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: "90%",
                  marginBottom: "1.5rem",
                }}
              >
                Blockchain based decentralized depository
              </div>
              <div style={{ fontSize: "1.3rem" }}>
                Blockchain based DApp works as Depository to store and transact
                "Dematerialized Shares".
              </div>
            </FlexColumn>
            <img src={Ddd} style={{ borderRadius: "0 10px 10px 0" }} />
          </FlexRow>
        </Container>
      </motion.div>
      {/* cleverb */}
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Container style={{ padding: "0", textAlign: "left" }}>
          <FlexRow>
            <img src={Cleverb} style={{ borderRadius: "10px 0 0 10px" }} />
            <FlexColumn
              style={{
                width: "40%",
                textAlign: "right",
                padding: "4rem",
                justifyContent: "center",
              }}
            >
              <div
                className="font_main"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: "90%",
                  marginBottom: "1.5rem",
                }}
              >
                clever b
              </div>
              <div style={{ fontSize: "1.3rem" }}>
                React based Ed-Tech platform for a publishing company.
              </div>
            </FlexColumn>
          </FlexRow>
        </Container>
      </motion.div>
    </Section>
  );
};

export default Works;

const Section = styled.section`
  .heading {
    border-bottom: solid 4px var(--text-secondary);
    color: var(--text-primary);
  }
  img {
    height: 400px;
    border-radius: 0 10px 10px 0;
  }
`;
