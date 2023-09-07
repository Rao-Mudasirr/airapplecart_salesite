import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
// import Logo from "../assests/home-page/home/logo-home.svg";
import "./HomeLayout.scss";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { NavLink } from "react-router-dom";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import MobileHeader from "./MobileHeader";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Navbar = () => {
    const path = [
        {
          route: "/",
          name: "Home",
          isSubMenu: false,
          list: null,
        },
        {
          route: "#",
          name: "Products",
          isSubMenu: false,
          list: [
            { subRoute: '/air-marketer', subName: 'Air Marketer' },
            { subRoute: '/air-sales', subName: 'Air Sales' },
            { subRoute: '/air-service', subName: 'Air Services' },
            { subRoute: '/air-operation', subName: 'Air Operations' },
            { subRoute: '/air-calander', subName: 'Calendar Piper' },
            { subRoute: '/air-flat-sign', subName: 'Flat Sign' },
            { subRoute: '/air-stenogofer', subName: 'Stenogofer' },
            { subRoute: '/air-mlm', subName: 'MLM' },
            { subRoute: '/air-grammer-tok', subName: 'Grammer Tok' },
          ],
        },
        {
          route: "/contact-us",
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
      const [showSubMenu, setShowSubMenu] = useState(false);

      const handleMouseEnter = () => {
        if (isMobile) return;
        setShowSubMenu(!showSubMenu);
      };

      // const handleMouseLeave = () => {
      //   if (isMobile) return;
      //   setShowSubMenu(false);
      // };
    
      const { width } = useWindowDimensions();
      const isMobile = width < 900;
    //   const navigate = useNavigate();
    
      return (
        <Box component={"nav"} className="navbar-parent">
          <Container maxWidth="xl">
            <Box className="navbar-box">
              <Box className="image-box">
                <img src={'assets/Home/Logo.png'} alt="logo" width={153} height={38} loading="lazy" />
              </Box>
              {!isMobile && (
                <>
                  <Box className="navbar-list-parent">
                    <ul className="navbar-list">
                      {path?.map((e) => (
                        e?.list?.length > 0 ? (
                          <React.Fragment>
                              <NavLink onClick={handleMouseEnter} className={'nav-link'} to={e?.route}>{e?.name}</NavLink> &nbsp; <ExpandMoreIcon sx={{color: '#6b7280'}}/>
                              {
                                showSubMenu && ( 
                                  <ul className="sub-menu">
                                    {
                                      e?.list?.map((data,index)=>(
                                        <li key={index}><NavLink className={'nav-link'} onClick={handleMouseEnter} to={data?.subRoute}>{data?.subName}</NavLink></li>
                                      ))
                                    }
                                  </ul>
                                )
                              }
                              
                          </React.Fragment>
                        ) : (
                        <React.Fragment key={e?.name}>
                          <NavLink className={'nav-link'} to={e?.route}>{e?.name}</NavLink>
                        </React.Fragment>
                        )
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
