import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
// import Logo from "../assests/home-page/home/logo-home.svg";
import "./HomeLayout.scss";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { NavLink } from "react-router-dom";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import MobileHeader from "./MobileHeader";

export const Navbar = () => {
    const path = [
        {
          route: "/#",
          name: "Home",
          isSubMenu: false,
          list: null,
        },
        {
          route: "/#",
          name: "Products",
          isSubMenu: false,
          list: null,
        },
        {
          route: "/#",
          name: "Contact Us",
          isSubMenu: false,
          list: null,
        },
        {
          route: "/#",
          name: "Prcing",
          isSubMenu: true,
          list: [],
        },
      ];
      const [active, setActive] = useState(false);
    
      const { width } = useWindowDimensions();
      const isMobile = width < 900;
    //   const navigate = useNavigate();
    
      return (
        <Box component={"nav"} className="navbar-parent">
          <Container>
            <Box className="navbar-box">
              <Box className="image-box">
                <img src={'assets/Home/Logo.png'} alt="logo" width={153} height={38} loading="lazy" />
              </Box>
              {!isMobile && (
                <>
                  <Box className="navbar-list-parent">
                    <ul className="navbar-list">
                      {path?.map((e) => (
                        <React.Fragment key={e?.name}>
                          <NavLink className={'nav-link'} to={e?.route}>{e?.name}</NavLink>
                        </React.Fragment>
                      ))}
                    </ul>
                  </Box>
                  <Box className="navbar-btn-parent">
                    <Button className="signin">
                      Sign In
                    </Button>
                    &nbsp; &nbsp;
                    <Button className="signup">
                      Sign up
                    </Button>
                  </Box>
                </>
              )}
              {isMobile && <MobileHeader path={path} />}
            </Box>
          </Container>
        </Box>
      );
    };
