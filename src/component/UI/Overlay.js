import "./Overlay.css";
import ReactDOM from 'react-dom';
const OL = ()=>{
    return <div className="overlay"></div>;
}
const Overlay = ()=>{
    return ReactDOM.createPortal(<OL/>,document.getElementById("overlay-root"));
}
export default Overlay;