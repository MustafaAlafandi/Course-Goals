import { Link } from "react-router-dom";
import classes from "./About.module.css";
const About = () => {
  return (
    <div className={classes.about}>
      <h1>About The Project</h1>
      <p>This is a React app to leave feedback for a product or service</p>
      <p>Version:1.0.0</p>
      <Link to="/">Back To Home</Link>
    </div>
  );
};
export default About;