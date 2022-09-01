import React, { useContext } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import contextValue from '../../Context/notes/NoteContext';
import AddNote from '../AddNote';


const Notes = () => {
    const context = useContext(contextValue);
    const { notes, addNote } = context;
    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <h1>Your Notes</h1>
                {notes.map((notes) => {
                    return <NoteItem key={notes._id} notes={notes} />
                })}
            </div>
        </>
    )
}
export default Notes