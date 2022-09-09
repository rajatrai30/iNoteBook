import React, { useContext } from 'react';
import contextValue from '../../Context/notes/NoteContext';


const NoteItem = (props) => {
    const context = useContext(contextValue);
    const { deleteNote } = context;
    const { notes, updateNote } = props;

    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{notes.title}</h5>
                        <i className="fa-solid fa-trash-can mx-2" style={{cursor:"pointer"}} onClick={() => {
                            deleteNote(notes._id);
                            props.showAlert("Note Deleted Successfully !!!", "success")
                        }}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" style={{cursor:"pointer"}} onClick={() => { updateNote(notes)}}></i>
                    </div>
                    <p className="card-text">{notes.description}</p>
                </div>
            </div>
        </div>
    )
}
export default NoteItem;