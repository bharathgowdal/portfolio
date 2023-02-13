import styled from "styled-components";
import FlexRow from "./FlexRow";

const NavBar = () => {
  return (
    <Nav>
      <div className="navbar">
        <div className="navlist">
          <FlexRow className="navitems">
            <a href="/#hero">About</a>
            <a href="/#works">Projects</a>
            <a href="/#contact">Contact</a>
          </FlexRow>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 20px;
  height: 100vh;
  width: 3rem;
  padding: 10px;
  .navbar {
    margin-left: 2rem;
    rotate: 90deg;
  }
  .navlist {
    width: 100vh;
    display: flex;
    justify-content: center;
  }
  .navitems {
    width: 100vh;
    justify-content: space-around;
  }
  a {
    background: none;
    border: none;
    color: var(--text-primary);
    cursor: pointer;
  }
`;
