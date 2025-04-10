import Header from "../components/Header";
import RateInputBox from "../components/RateInputBox";
import Comments from "../components/Comments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Header />
      <RateInputBox />
      <Comments />
      <Link to="/about" className="about-page">
        <FontAwesomeIcon
          className="icon"
          icon={faQuestion}
          width="20px"
          height="40px"
        />
      </Link>
    </>
  );
};
export default HomePage;
