import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import NoteList from './components/NotesList';
import Search from './components/Search';
import { nanoid } from 'nanoid';

import './style.css'
const App = () =>{
  
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('')
  const [darkMode , setDarkMode] = useState(false);
  useEffect( ()=> {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data'));
      if(savedNotes){
      setNotes(savedNotes);
      }
    },[])
  useEffect( () =>{
    if(notes.length > 0){

      localStorage.setItem('react-notes-app-data',
        JSON.stringify(notes)
      );
    }
    }, [notes]);
  const addNote =(text)=>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes)
  };
  const deleteNote = (id)  =>{
     const newNote = notes.filter((note)=>note.id !== id);
     setNotes(newNote)
  }
  

  return(
  <div className={`${darkMode && 'dark-mode'}`}>
    <div className='container'> 
      <Header handleDarkmode={setDarkMode} />
      <Search handleSearch={setSearchText}/>
      <NoteList notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
      )} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
    </div>
    </div>
  )
}

export default App;
