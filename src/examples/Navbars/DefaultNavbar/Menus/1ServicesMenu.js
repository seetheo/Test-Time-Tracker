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

// Prototype components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import DefaultNavbarMenu from "examples/Navbars/DefaultNavbar/DefaultNavbarMenu";
import Lottie from "react-lottie";
import lottiefile from "../../../../lotties/services.json";
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

function ServicesMenu({ routes, open, close, mobileMenu }) {
  const renderServicesMenuRoute = (routeName) =>
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
          top={0}left={0}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
          <SuiBox position="absolute" top={0} left={0} width="100%" height="100%" />
        </SuiBox>
      )}

      <SuiBox py={1} pl={2}>
        {renderServicesMenuRoute("personal-coaching")}
        {renderServicesMenuRoute("blood-testing")}
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
ServicesMenu.defaultProps = {
  mobileMenu: false,
  open: false,
  close: false,
};

// Typechecking props for the AuthenticationMenu
ServicesMenu.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  close: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  mobileMenu: PropTypes.bool,
};

export default ServicesMenu;
