import PropTypes from "prop-types";
import SuiTypography from "component/SuiTypography";

const headingStyle = {
  color: "red",
  backgroundColor: "black",
};
// eslint-disable-next-line arrow-body-style
const Header = ({ title }) => {
  return (
    <header>
      <h1 style={headingStyle}> {title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};
Header.defaultProps = {
  title: PropTypes.string,
};

export default Header;
