import React from 'react';
import Header from './components/header.jsx';
import './App.css';
import "./components/style.css";
import Footer from './components/footer.jsx';
import SavedNotes from './components/savednotes.jsx';
import { useState } from 'react';
import Note from './components/Note.jsx';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer,toast} from 'react-toastify';



function App() {
const [notes,setNotes]=useState([])
  const SaveNote =(newnote) => {
    setNotes(prevNotes=> {
      return [...prevNotes, newnote]
    })

  }
  const deleteNote = (id) => {
    setNotes(prevNotes => {
      
      return prevNotes.filter((noteItem, index) => {
       
        return index !== id;
         
       
      });
       
       
    });
     toast.success('note deleted');
  };
  return (
    <>
   <Header/>
   <main>
    <ToastContainer/>
<SavedNotes  onAdd={SaveNote} />
{notes.map((noteItem,index)=>{
  return <Note  key={index}  id={index}   title={noteItem.title} content={noteItem.content}  onDelete={deleteNote} />
})}
</main>
<footer>

<Footer/>
</footer>
   </>
  );
}

export default App;
