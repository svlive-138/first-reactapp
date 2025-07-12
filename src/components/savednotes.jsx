import React from "react";
import"./style.css";
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';




const  SavedNotes=(props) => {


    const [note,setNote]=useState({
        title: "",
        content: ""
    })

    


    const handleChange = (event) => {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        })
    }
    const addNote = (event) => {
        if (!note.title.trim() || !note.content.trim()) {
    alert("Please fill in both Title and Content.");
    return;
    
  }
        props.onAdd(note)
        setNote({
            title: "" ,
            content: ""
        });
        event.preventDefault();
        
    }
    
    

    return(
        
        <div className="notebox">
        <div className="note">
           
            <form  >
                <input 
                name='title'
                  value={note.title} 
                 placeholder='Title'
                 onChange={handleChange}
                 required 
                 type="text"
                />

                <textarea className=""
                    name='content'  
                     value={note.content}
                    placeholder='Take a note...'
                    rows='3'
                    onChange={handleChange}
                    required
                   
                />
                <button  type='submit'  onClick={addNote}>Add</button>
            </form>
             

        </div>
        </div>
        
    );
}
export default SavedNotes;