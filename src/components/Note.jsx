import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Note = (props) => {

    const handaleClick = () => {
        props.onDelete(props.id);
    }
    return (
        <div className="note-box">
       
        <div className="note-item">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button   onClick={handaleClick} className="delete-button">DELETE</button>
        </div>
        </div>
        

    );
}
export default Note;