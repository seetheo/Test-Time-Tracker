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

import { useMemo } from "react";

// porp-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-chartjs-2 components
import { Doughnut } from "react-chartjs-2";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Prototype components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiBadgeDot from "components/SuiBadgeDot";

// ProgressDoughnutChart configurations
import configs from "examples/Charts/DoughnutCharts/ProgressDoughnutChart/config";

function ProgressDoughnutChart({ color, icon, title, count, height, chart }) {
  const { data, options } = configs(chart.labels || [], chart.datasets || {});

  const renderBadgeDots = chart.labels
    ? chart.labels.map((label, index) => {
        const badgeDotKey = `badge-dot-${index}`;

        return (
          <SuiBadgeDot
            key={badgeDotKey}
            variant="gradient"
            color={
              chart.datasets.backgroundColors ? chart.datasets.backgroundColors[index] : "info"
            }
            size="xs"
            badgeContent={label}
            font={{ color: "text", weight: "medium" }}
            px={0}
          />
        );
      })
    : null;

  return (
    <Card>
      <SuiBox display="flex" justifyContent="space-between" alignItems="flex-start" pt={2} px={2}>
        <SuiBox width="45%">
          <SuiBox display="flex" alignItems="center">
            <SuiBox
              width="3rem"
              height="3rem"
              display="grid"
              justifyContent="center"
              alignItems="center"
              borderRadius="md"
              shadow="md"
              color="white"
              bgColor={color}
              variant="gradient"
            >
              <Icon fontSize="default">{icon}</Icon>
            </SuiBox>
            <SuiBox ml={2} lineHeight={1}>
              <SuiTypography
                variant="button"
                fontWeight="medium"
                textTransform="capitalize"
                color="text"
              >
                {title}
              </SuiTypography>
              {count ? (
                <SuiTypography variant="h5" fontWeight="bold">
                  {count}
                </SuiTypography>
              ) : null}
            </SuiBox>
          </SuiBox>
          <SuiBox display="flex" flexDirection="column" mt={2}>
            {renderBadgeDots}
          </SuiBox>
        </SuiBox>
        {useMemo(
          () => (
            <SuiBox width="55%" mb={2}>
              <Doughnut data={data} options={options} sx={{ height }} />
            </SuiBox>
          ),
          [chart, height]
        )}
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of ProgressDoughnutChart
ProgressDoughnutChart.defaultProps = {
  color: "info",
  count: 0,
  height: "100%",
};

// Typechecking props for the ProgressDoughnutChart
ProgressDoughnutChart.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  chart: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.array, PropTypes.object])).isRequired,
};

export default ProgressDoughnutChart;
