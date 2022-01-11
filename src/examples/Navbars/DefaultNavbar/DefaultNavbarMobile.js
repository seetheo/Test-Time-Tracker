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

// @mui material components
import Menu from "@mui/material/Menu";
// import Grid from "@mui/material/Grid";

// Prototype components
import SuiBox from "components/SuiBox";

// Prototype example components
import DefaultNavbarLink from "examples/Navbars/DefaultNavbar/DefaultNavbarLink";

// DefaultNavbar dropdown menus
import OurMission from "examples/Navbars/DefaultNavbar/Menus/OurMissionMenu";
import ServicesMenu from "examples/Navbars/DefaultNavbar/Menus/ServicesMenu";
import ApplicationsMenu from "examples/Navbars/DefaultNavbar/Menus/ApplicationsMenu";
import EcommerceMenu from "examples/Navbars/DefaultNavbar/Menus/EcommerceMenu";
import DocsMenu from "examples/Navbars/DefaultNavbar/Menus/DocsMenu";

function DefaultNavbarMobile({ routes, open, close }) {
  const { width } = open && open.getBoundingClientRect();
  const [openCollapse, setOpenCollapse] = useState(false);

  const handleSepOpenCollapse = (name) =>
    openCollapse === name ? setOpenCollapse(false) : setOpenCollapse(name);

  return (
    <Menu
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      anchorEl={open}
      open={Boolean(open)}
      onClose={close}
      MenuListProps={{ style: { width: `calc(${width}px - 4rem)` } }}
    >
      <SuiBox px={0.5}>
        <DefaultNavbarLink
          name="ourmission"
          collapseStatus={openCollapse === "ourmission"}
          onClick={() => handleSepOpenCollapse("ourmission")}
        >
          <SuiBox maxHeight="16rem" overflow="auto">
            <OurMission routes={routes} mobileMenu />
          </SuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="authentication"
          collapseStatus={openCollapse === "authentication"}
          onClick={() => handleSepOpenCollapse("authentication")}
        >
          <SuiBox maxHeight="16rem" overflow="auto">
            <ServicesMenu routes={routes} mobileMenu />
          </SuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="applications"
          collapseStatus={openCollapse === "applications"}
          onClick={() => handleSepOpenCollapse("applications")}
        >
          <SuiBox maxHeight="16rem" overflow="auto">
            <ApplicationsMenu routes={routes} mobileMenu />
          </SuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="ecommerce"
          collapseStatus={openCollapse === "ecommerce"}
          onClick={() => handleSepOpenCollapse("ecommerce")}
        >
          <SuiBox maxHeight="16rem" overflow="auto">
            <EcommerceMenu routes={routes} mobileMenu />
          </SuiBox>
        </DefaultNavbarLink>
        <DefaultNavbarLink
          name="ourmission"
          collapseStatus={openCollapse === "ourmission"}
          onClick={() => handleSepOpenCollapse("ourmission")}
        >
          <SuiBox maxHeight="16rem" overflow="auto">
            <DocsMenu routes={routes} mobileMenu />
          </SuiBox>
        </DefaultNavbarLink>
      </SuiBox>
    </Menu>
  );
}

// Typechecking props for the DefaultNavbarMenu
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  close: PropTypes.oneOfType([PropTypes.func, PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
