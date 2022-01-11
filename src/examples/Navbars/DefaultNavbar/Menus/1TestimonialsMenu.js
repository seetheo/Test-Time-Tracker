/**
=========================================================
* Prototype - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/Prototype
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import MenuItem from "@mui/material/MenuItem";
import Icon from "@mui/material/Icon";
import NotificationItem from "examples/Items/NotificationItem";
import face1 from "assets/images/team-2.jpg";
import face2 from "assets/images/marie.jpg";
import face3 from "assets/images/kal-visuals-square.jpg";
import face4 from "assets/images/team-4.jpg";
// Prototype components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";
import Lottie from "react-lottie";
import lottiefile from "../../../../lotties/testimonials.json";
// Prototype example components

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: lottiefile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

// Images
// import curved8 from "assets/images/curved-images/curved8.jpg";

function TestimonialsMenu({ routes, open, close, mobileMenu }) {
  // const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);

  const renderTestimonialsMenuRoute = (routeName) =>
    routes.map(({ key, name, collapse }) => {
      let template;

      const [menu, setMenu] = useState(false);
      const openMenu = ({ currentTarget }) => setMenu(currentTarget);
      const closeMenu = () => setMenu(false);

      if (key === routeName && !mobileMenu) {
        template = (
          <MenuItem key={key} onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            {name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Icon sx={{ fontWeight: "bold", ml: "auto" }}>chevron_right</Icon>
            <DefaultNavbarMenu
              placement="right-start"
              open={menu}
              close={closeMenu}
              style={{ paddingLeft: "1.25rem" }}
            >
              {collapse.map(({ key: collapseKey, name: collapseName, route }) => (
                <MenuItem
                  component={Link}
                  to={route}
                  key={collapseKey}
                  onClick={mobileMenu ? undefined : close}
                >
                  {collapseName}
                </MenuItem>
              ))}
            </DefaultNavbarMenu>
          </MenuItem>
        );
      } else if (key === routeName && mobileMenu) {
        template = (
          <SuiBox key={key} pr={2} mt={0} mb={2}>
            <SuiTypography variant="h6" fontWeight="bold" gutterBottom>
              {name}
            </SuiTypography>
            {collapse.map(({ key: collapseKey, name: collapseName, route }) => (
              <MenuItem
                component={Link}
                to={route}
                key={collapseKey}
                onClick={mobileMenu ? undefined : close}
              >
                {collapseName}
              </MenuItem>
            ))}
          </SuiBox>
        );
      }

      return template;
    });

  const renderMenuContent = (
    <SuiBox display={mobileMenu ? "block" : "flex"}>
      {!mobileMenu && (
        <SuiBox
          width="10rem"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
          borderRadius="lg"
          overflow="hidden"
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
          <SuiBox position="absolute" top={0} left={0} width="100%" height="100%" />
        </SuiBox>
      )}

      <SuiBox py={1} pl={2}>
        {/* {renderServicesMenuRoute("personal-coaching")} */}
        {renderTestimonialsMenuRoute("testimonials")}
        <NotificationItem
          image={<img src={face1} alt="person" />}
          title={["This has helped me so much", "from Laur"]}
          date="13 minutes ago"
        />
        <NotificationItem
          image={<img src={face2} alt="person" />}
          title={["I use the services everyday", "from Susan"]}
          date="3 hours ago"
        />
        <NotificationItem
          image={<img src={face3} alt="person" />}
          title={["I am taking ADHD Treatment and ... It Works!", "from Keisha"]}
          date="2 days ago"
        />
        <NotificationItem
          image={<img src={face4} alt="person" />}
          title={["This is the future.", "from Zhack"]}
          date="1 week ago"
        />
      </SuiBox>
    </SuiBox>
  );

  return mobileMenu ? (
    renderMenuContent
  ) : (
    <DefaultNavbarMenu open={open} close={close}>
      {renderMenuContent}
    </DefaultNavbarMenu>
  );
}

// Setting default values for the props of AuthenticationMenu
TestimonialsMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the AuthenticationMenu
TestimonialsMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default TestimonialsMenu;
