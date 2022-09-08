import React, { useContext, useEffect, useRef, useState} from 'react';
import NoteItem from '../NoteItem/NoteItem';
import contextValue from '../../Context/notes/NoteContext';
import AddNote from '../AddNote';
import { useHistory } from 'react-router-dom';


const Notes = (props) => {
    let history = useHistory();
    const context = useContext(contextValue);
    const { notes, getNotes, editNote } = context;
    const ref = useRef(null);
    const refClose = useRef(null);

    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    useEffect(() => {
        if (localStorage.getItem('token')){
            getNotes()
        }
        else
        {
            history.push("/login")
        }
        // eslint-disable-next-line
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleAddClick = (e) => {
        console.log("updated succesfully!!", note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
        props.showAlert("Note Updated Successfully !!!", "success")


    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='container my-3'>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input type="text" id="edescription" name="edescription" value={note.edescription} className="form-control" onChange={onChange} minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input type="text" id="etag" name="etag" className="form-control" value={note.etag} onChange={onChange} minLength={5} required/>
                                </div>
                                <button type="submit" className="btn btn-primary" onClick={handleAddClick}>Add Note</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.etitle.length<5 || note.edescription.length<5} className="btn btn-primary" onClick={handleAddClick}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h1>Your Notes</h1>
                <div className='container mx-2'>
                    {notes.length === 0 && 'No Notes to Display'}
                </div>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} updateNote={updateNote} notes={notes} showAlert={props.showAlert}/>
                })}
            </div>
        </>
    )
}
export default Notes