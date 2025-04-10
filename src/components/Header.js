import classes from "./Header.module.css";
import PropTypes from 'prop-types';
const Header = ({text = "Feedback UI"}) => {
  return <header className={classes.header}>{text}</header>;
};
// Header.defaultProps = {
// text: "Feedback UI"
// };
Header.propTypes = {
  text: PropTypes.string,
}
export default Header;
