import React from 'react'
import noteContext from '../context/notes/noteContext';
import { useContext } from 'react';
import { Trash } from 'react-bootstrap-icons';
import { PencilSquare } from 'react-bootstrap-icons';


{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg> */}



const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className='col-md-3'>
            <div className = "card my-3">
                    <div className = "card-body">
                        <div className="d-flex align-items-center">
                        <h5 className = "card-title">{note.title}</h5>
                        <i className = "fa-regular fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        {/* <i className="bi bi-trash" onClick={()=>{deleteNote(note._id)}}></i> */}
                        <i className = "fa-regular fa-pen-to-square mx-2" onClick={() => {updateNote(note)}}></i>

                        {/* <button type="button" className="btn btn-link"><span className="bi bi-pencil-square"></span></button> */}
                        
                        </div>
                        <p className = "card-text">{note.description} </p>
                    </div>
            </div>
        </div>
    )
}

export default Noteitem