import spinnerGIF from "../../assets/spinning loading.gif";
function Spinner() {
     return  <img
        src={spinnerGIF}
        alt="Loading..."
        style={{ width: "100px", margin: "auto", display: "block" }}
      />
}
export default Spinner;
