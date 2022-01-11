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

// @mui material components
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Icon from "@mui/material/Icon";
// import Link from "@mui/material/Link";

// Prototype components
// import SuiButton from "components/SuiButton";
// import SuiBox from "components/SuiBox";

import SuiTypography from "components/SuiTypography";
import Divider from "@mui/material/Divider";
import Lottie from "react-lottie";
import lottiefile from "../../lotties/front_lottie.json";
// import AnnouncementCard from "examples/Cards/AnnouncementCard";
// Custom styles for the SidenavCard
// import { card, cardContent } from "examples/Sidenav/styles/sidenavCard";

// Prototype context
// import { useSoftUIController } from "context";
/*
const by = {
  image: "https://demos.creative-tim.com/soft-ui-dashboard/assets/img/team-4.jpg",
  name: "lucafffs prila",
  date: "2h ago",
};
const badge = { color: "info", label: "recommendation" };
const title = "I need a Ruby developer for my new website.";

const description =
  "The website was initially built in PHP, I need a professional ruby programmer to shift it.";

const value = { type: "$", amount: "3,000", method: "month" };
const action = { type: "internal", route: "/jobs", label: "apply" };
*/

function SidenavCard() {
  // const { miniSidenav, sidenavColor } = controller;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottiefile,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <SuiTypography variant="h6">
      <Divider />
      <Divider />
      <Lottie options={defaultOptions} height={200} width={200} />
      {/*      <AnnouncementCard
        by={by}
        title={title}
        description={description}
        badge={badge}
        action={action}
        value={value}
      />
*/}
    </SuiTypography>
  );
}

export default SidenavCard;
