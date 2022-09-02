import NoteContext from "./NoteContext";
import React from "react";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    // GET ALL NOTES
    const getNotes = async () => {
        // USE API CALL REMAINING
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkMTJjYWJlMTcyNzg0MmIyYWVmOTljIn0sImlhdCI6MTY1NzkwMTI4MX0.mZlddWBUvMMu0-t2lzCQz1GKp7ZSqTqI3a5uwi8Y4Hs"
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json)
    }



    // ADD a Note
    const addNote = async (title, description, tag) => {
        // USE API CALL REMAINING
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkMTJjYWJlMTcyNzg0MmIyYWVmOTljIn0sImlhdCI6MTY1NzkwMTI4MX0.mZlddWBUvMMu0-t2lzCQz1GKp7ZSqTqI3a5uwi8Y4Hs"
            },
            body: JSON.stringify({ title, description, tag })
        });
        // const json = response.json();

        console.log("Adding a new note")
        const note = {
            "_id": "62d2a260b36a3bf06b3dfda4",
            "user": "62d12cabe1727842b2aef99c",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-07-16T11:34:56.514Z",
            "__v": 0
        }
        setNotes(notes.concat(note))
    }

    // DELETE a Note
    const deleteNote = async (id) => {
        // USE API CALL REMAINING
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkMTJjYWJlMTcyNzg0MmIyYWVmOTljIn0sImlhdCI6MTY1NzkwMTI4MX0.mZlddWBUvMMu0-t2lzCQz1GKp7ZSqTqI3a5uwi8Y4Hs"
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json)

        // LOGIC TO DELETE IN CLIENT SIDE
        console.log("deleting the note with id." + id)
        const delNotes = notes.filter((notes) => { return notes._id !== id })
        setNotes(delNotes)

    }

    // EDIT a Note
    const editNote = async (id, title, description, tag) => {
        // API CALLS
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkMTJjYWJlMTcyNzg0MmIyYWVmOTljIn0sImlhdCI6MTY1NzkwMTI4MX0.mZlddWBUvMMu0-t2lzCQz1GKp7ZSqTqI3a5uwi8Y4Hs"
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();

        // LOGIC TO EDIT IN CLIENT SIDE
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;

            }

        }

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
