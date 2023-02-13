import "./App.css";
import FlexRow from "./components/FlexRow";
import NavBar from "./components/NavBar";
import useLocalStorage from "use-local-storage";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import Hero from "./components/Hero";
import { motion } from "framer-motion";

import { useEffect } from "react";
import Works from "./components/Works";
import Artist from "./components/Artist";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    console.log("theme change");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  function triggerEvent(eventName, keyCode) {
    var event; // The custom event that will be created

    if (document.createEvent) {
      event = document.createEvent("HTMLEvents");
      event.initEvent(eventName, true, true);
    } else {
      event = document.createEventObject();
      event.eventType = eventName;
    }

    event.eventName = eventName;
    event.keyCode = keyCode || null;

    if (document.createEvent) {
      document.dispatchEvent(event);
    } else {
      document.fireEvent("on" + event.eventType, event);
    }
  }

  const keypress = () => {
    setOpen(true);
    triggerEvent("keydown", 123);
    triggerEvent("keyup");
  };
  useEffect(() => {
    console.log(
      Object.defineProperties(new Error(), {
        toString: {
          value() {
            new Error().stack.includes("toString@") && alert("Safari devtools");
          },
        },
        message: {
          get() {
            keypress();
          },
        },
      })
    );
    if (navigator.webdriver) {
    }
  }, []);

  return navigator.webdriver ? (
    <>Loading</>
  ) : open ? (
    <>kejgfiusy jhfuygk</>
  ) : (
    <div className="App" data-theme={theme}>
      <FlexRow style={{ fontSize: "1.5rem" }} className="font_main ">
        BGL
        {/* <button onClick={checkConsole}>{open}</button> */}
        <div>
          <button onClick={switchTheme} className="theme">
            {theme == "dark" ? <MdDarkMode /> : <MdLightMode />}
            {/* <div
              className="theme_info"
              style={{
                position: "relative",
                width: "120px",
                right: "45px",
              }}
            >
              Switch Theme
            </div> */}
          </button>
        </div>
      </FlexRow>
      <section style={{ height: "90vh" }}>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "0" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.div>
      </section>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Works />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Artist />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
      <NavBar />
    </div>
  );
}

export default App;
