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

import { useState, useEffect } from "react";

// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Prototype components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiButton from "components/SuiButton";

// Prototype example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Prototype base styles
import breakpoints from "assets/theme/base/breakpoints";

// DefaultNavbar dropdown menus
import OurMission from "examples/Navbars/DefaultNavbar/Menus/OurMissionMenu";
import ServicesMenu from "examples/Navbars/DefaultNavbar/Menus/ServicesMenu";
import ProductsMenu from "examples/Navbars/DefaultNavbar/Menus/ProductsMenu";
import TestimonialsMenu from "examples/Navbars/DefaultNavbar/Menus/TestimonialsMenu";
import DocsMenu from "examples/Navbars/DefaultNavbar/Menus/DocsMenu";

function DefaultNavbar({ routes, transparent, light, action }) {
  const [ourMission, setOurMission] = useState(false);
  const [servicesMenu, setServicesMenu] = useState(false);
  const [productsMenu, setProductsMenu] = useState(false);
  const [testimonialsMenu, setTestimonialsMenu] = useState(false);
  const [docsMenu, setDocsMenu] = useState(false);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openOurMission = ({ currentTarget }) => setOurMission(currentTarget);
  const closeOurMission = () => setOurMission(false);
  const openServicesMenu = ({ currentTarget }) => setServicesMenu(currentTarget);
  const closeServicesMenu = () => setServicesMenu(false);
  const openProductsMenu = ({ currentTarget }) => setProductsMenu(currentTarget);
  const closeProductsMenu = () => setProductsMenu(false);
  const openTestimonialsMenu = ({ currentTarget }) => setTestimonialsMenu(currentTarget);
  const closeTestimonialsMenu = () => setTestimonialsMenu(false);
  const openDocsMenu = ({ currentTarget }) => setDocsMenu(currentTarget);
  const closeDocsMenu = () => setDocsMenu(false);
  const openMobileNavbar = ({ currentTarget }) => setMobileNavbar(currentTarget.parentNode);
  const closeMobileNavbar = () => setMobileNavbar(false);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  return (
    <Container>
      <SuiBox
        py={1}
        px={{ xs: transparent ? 4 : 5, sm: transparent ? 2 : 5, lg: transparent ? 0 : 5 }}
        my={2}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="section"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        left={0}
        zIndex={3}
        sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }) => ({
          backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <SuiBox component={Link} to="/" py={transparent ? 1.5 : 0.75} lineHeight={1}>
          <SuiTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
            Fheal
          </SuiTypography>
        </SuiBox>
        <SuiBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
          <DefaultNavbarLink
            name="our mission"
            openHandler={openOurMission}
            closeHandler={closeOurMission}
            light={light}
          />
          <DefaultNavbarLink
            name="services"
            openHandler={openServicesMenu}
            closeHandler={closeServicesMenu}
            light={light}
          />

          <DefaultNavbarLink
            name="products"
            openHandler={openProductsMenu}
            closeHandler={closeProductsMenu}
            light={light}
          />
          <DefaultNavbarLink
            name="testimonials"
            openHandler={openTestimonialsMenu}
            closeHandler={closeTestimonialsMenu}
            light={light}
          />
          <DefaultNavbarLink
            name="FAQ"
            openHandler={openDocsMenu}
            closeHandler={closeDocsMenu}
            light={light}
          />
        </SuiBox>
        {action &&
          (action.type === "internal" ? (
            <SuiBox display={{ xs: "none", lg: "inline-block" }}>
              <SuiButton
                component={Link}
                to={action.route}
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                circular
              >
                Join Now
                {action.label}
              </SuiButton>
            </SuiBox>
          ) : (
            <SuiBox display={{ xs: "none", lg: "inline-block" }}>
              <SuiButton
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="gradient"
                color={action.color ? action.color : "info"}
                size="small"
                circular
              >
                Join Now
                {action.label}
              </SuiButton>
            </SuiBox>
          ))}
        <SuiBox
          display={{ xs: "inline-block", lg: "none" }}
          lineHeight={0}
          py={1.5}
          pl={1.5}
          color="inherit"
          sx={{ cursor: "pointer" }}
          onClick={openMobileNavbar}
        >
          <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
        </SuiBox>
      </SuiBox>
      <OurMission routes={routes} open={ourMission} close={closeOurMission} />
      <ServicesMenu routes={routes} open={servicesMenu} close={closeServicesMenu} />
      <ProductsMenu routes={routes} open={productsMenu} close={closeProductsMenu} />
      <TestimonialsMenu routes={routes} open={testimonialsMenu} close={closeTestimonialsMenu} />
      <DocsMenu routes={routes} open={docsMenu} close={closeDocsMenu} />
      {mobileView && (
        <DefaultNavbarMobile routes={routes} open={mobileNavbar} close={closeMobileNavbar} />
      )}
    </Container>
  );
}

// Setting default values for the props of DefaultNavbar
DefaultNavbar.defaultProps = {
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      type: PropTypes.oneOf(["external", "internal"]).isRequired,
      route: PropTypes.string.isRequired,
      color: PropTypes.oneOf([
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
      ]),
      label: PropTypes.string.isRequired,
    }),
  ]),
};

export default DefaultNavbar;
