import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import "./HomeLayout.scss";

const MobileHeader = ({ path }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <Box
        className={`burger ${active ? "active" : ""}`}
        onClick={() => setActive(!active)}
      >
        <Box className="strip burger-strip-2">
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
      <Box
        className="mobile-menu-list"
        style={{
          top: active ? "100px" : "-600px",
          opacity: active ? "1" : "0",
          zIndex:200
        }}
      >
        <ul className="navbar-list">
          {path?.map((e) => (
            <React.Fragment key={e?.name}>
              <NavLink to={e?.route}>{e?.name}</NavLink>
            </React.Fragment>
          ))}
        </ul>
          <Box className="navbar-btn-parent">
            <Button className="signin">
              Sign In
            </Button>
            &nbsp; &nbsp;
            <Button className="signup">
              Sign up
            </Button>
          </Box>
      </Box>
    </>
  );
};

export default MobileHeader;
