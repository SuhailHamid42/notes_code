import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';
import { Navigate, useNavigate } from 'react-router-dom';

const Notes = () => {
  const context = useContext(noteContext);
  // let history = useHistory();
  const { notes, getNotes, editNote } = context;

  // const {addNote} = context;
  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem('authToken')){
      console.log("Hello autoToken is there");
    getNotes()
    // eslint-disable-next-line
    // history.push("/login");

      }
    else{
      // getNotes()

        // history.push("/login");
        console.log("Hello autoToken is not there");

        navigate("/Login");
    }

  }, [])

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({id : "", etitle : "", edescription : "", etag : ""})
             

  const updateNote = (currentNote) => {
      ref.current.click();

      setNote({id: currentNote._id, etitle : currentNote.title, edescription : currentNote.description, etag : currentNote.tag})
      // props.showAlert("Updated Successfully", "success")
  }

  const handleClick = (e) => {
    console.log("Updating the Note")
    editNote(note.id, note.etitle, note.edescription, note.etag)
    refClose.current.click();
    // addNote(note.title, note.description, note.tag);
}

const onChange = (e) => {
    setNote({...note, [e.target.name] : e.target.value})
}

  return (
    <>
      <AddNote/>

      <button ref={ref} type="button" className = "btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal where is it
      </button>

      <div className = "modal fade" id="exampleModal" tabIndex ="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className = "modal-dialog" role="document">
          <div className = "modal-content">
            <div className = "modal-header">
              <h5 className = "modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className = "close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className =  "modal-body">
            <form className='my-3'>
  <div className ="mb-3">
    <label htmlFor="title" className ="form-label">Title</label>
    <input type="text" className ="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange}/>

  </div>
  <div className ="mb-3">
    <label htmlFor="description" className ="form-label">Description</label>
    <input type="text" className ="form-control"  value={note.edescription}  id="edescription" name='edescription' onChange={onChange} minLength={5} required/>
  </div>

  <div className ="mb-3">
    <label htmlFor="tag" className ="form-label">Tag</label>
    <input type="text" className ="form-control" id="etag" name='etag' value={note.etag}  onChange={onChange} minLength={5} required/>
  </div>

</form>
            </div>
            <div className = "modal-footer">
              <button ref={refClose} type="button" className = "btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button  disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className = "btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>

          </div>
        </div>
      </div>
      <div className='row my-3'>
        <h2>Your Notes</h2>
        <div className="container">
        {notes.length === 0 && "No Notes To Display"}
        </div>
        {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />
                })}

      </div>
    </>
  )
}

export default Notes
