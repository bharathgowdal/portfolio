import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <Section id="contact" style={{ minHeight: "100vh", textAlign: "center" }}>
      <span className="heading" style={{ fontSize: "2rem" }}>
        Contact
      </span>
      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{ opacity: 1, y: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ marginBottom: "8rem" }}
      >
        <Container style={{ padding: "2rem" }}>
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
        </Container>
      </motion.div>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  .heading {
    border-bottom: solid 4px var(--text-secondary);
    color: var(--text-primary);
  }
`;
