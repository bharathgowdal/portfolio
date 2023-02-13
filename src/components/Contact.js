import React from "react";
import styled from "styled-components";
import Container from "./Container";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { IoIosCall } from "react-icons/io";
const Contact = () => {
  return (
    <Section id="contact" style={{ minHeight: "50vh", textAlign: "center" }}>
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

          <a
            style={{ textDecoration: "none", fontSize: "1.5rem" }}
            href="tel:9164876310"
          >
            <div
              style={{
                marginBottom: "1rem",
                color: "var(--text-secondary",
                fontSize: "1.5rem",
              }}
            >
              <IoIosCall style={{ width: "20px", height: "20px" }} />
              &nbsp; +91 9164876310
            </div>
          </a>

          <a
            style={{ textDecoration: "none", fontSize: "1.5rem" }}
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bharathgowdaart@gmail.com"
            target="_blank"
          >
            <div
              style={{
                textDecoration: "none",
                color: "var(--text-secondary",
                fontSize: "1.5rem",
              }}
            >
              <FiMail style={{ width: "20px", height: "20px" }} />
              &nbsp; bharathgowdaart@gmail.com
            </div>
          </a>
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
