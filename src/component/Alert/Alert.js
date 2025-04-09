import './Alert.css'
import React from 'react'
import ReactDOM from 'react-dom'
const Backdrop =(props)=>{
return(
    <div className="alert">
        <h2 className="alert__name">{props.name}</h2>
        <p className="alert__description">{props.description}</p>
        <button className="alert__okay-button" onClick={() => props.onPressOkey()}>Okey</button>
    </div>
)
}
const Alert =(props)=>{
return(
    <React.Fragment>
    {ReactDOM.createPortal(<Backdrop name={props.name} description={props.description} onPressOkey={props.onPressOkey}/>,document.getElementById("backdrop-root"))}
    </React.Fragment>
)
}
export default Alert;