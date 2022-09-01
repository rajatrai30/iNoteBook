import NoteContext from "./NoteContext";
import React from "react";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "62d2a260b36a3bf06b3dfda4",
            "user": "62d12cabe1727842b2aef99c",
            "title": "my title",
            "description": "the info is getting ssaved",
            "tag": "personal",
            "date": "2022-07-16T11:34:56.514Z",
            "__v": 0
        },
        {
            "_id": "62dbbb18aeggfb66ddcc85a5ae6",
            "user": "62d12cabe1727842b2aef99c",
            "title": "NEW TITLE",
            "description": "New Information is saved",
            "tag": "pro 2",
            "date": "2022-07-23T09:10:48.736Z",
            "__v": 0
        },
        {
            "_id": "62d2a260bggf36a3bf06b3dfda4",
            "user": "62d12cabe1727842b2aef99c",
            "title": "my title",
            "description": "the info is getting ssaved",
            "tag": "personal",
            "date": "2022-07-16T11:34:56.514Z",
            "__v": 0
        },
        {
            "_id": "62dbbb18aeb66gddncc85a5ae6",
            "user": "62d12cabe1727842b2aef99c",
            "title": "NEW TITLE",
            "description": "New Information is saved",
            "tag": "pro 2",
            "date": "2022-07-23T09:10:48.736Z",
            "__v": 0
        },
        {
            "_id": "62d2a260b36a3bef06mb3dfda4",
            "user": "62d12cabe1727842b2aef99c",
            "title": "my title",
            "description": "the info is getting ssaved",
            "tag": "personal",
            "date": "2022-07-16T11:34:56.514Z",
            "__v": 0
        },
        {
            "_id": "62dbbb18aeb646ddccu85a5ae6",
            "user": "62d12cabe1727842b2aef99c",
            "title": "NEW TITLE",
            "description": "New Information is saved",
            "tag": "pro 2",
            "date": "2022-07-23T09:10:48.736Z",
            "__v": 0
        },
        {
            "_id": "62d2a2604b36a3bft06b3dfda4",
            "user": "62d12cabe1727842b2aef99c",
            "title": "my title",
            "description": "the info is getting ssaved",
            "tag": "personal",
            "date": "2022-07-16T11:34:56.514Z",
            "__v": 0
        },
        {
            "_id": "62dbbb18a7eb646ddcc85a5ae6",
            "user": "62d12cabe1727842b2aef99c",
            "title": "NEW TITLE",
            "description": "New Information is saved",
            "tag": "pro 2",
            "date": "2022-07-23T09:10:48.736Z",
            "__v": 0
        },
        {
            "_id": "62d2a260b36a3yqbf06b3dfda4",
            "user": "62d12cabe1727842b2aef99c",
            "title": "my title",
            "description": "the info is getting ssaved",
            "tag": "personal",
            "date": "2022-07-16T11:34:56.514Z",
            "__v": 0
        },
        {
            "_id": "62dbbb18aebn66ddjcc85a5ae6",
            "user": "62d12cabe1727842b2aef99c",
            "title": "NEW TITLE",
            "description": "New Information is saved",
            "tag": "pro 2",
            "date": "2022-07-23T09:10:48.736Z",
            "__v": 0
        }


    ]

    const [notes, setNotes] = useState(notesInitial)

    // ADD a Note
    const addNote = (title, description, tag)=>{
        // USE API CALL
        console.log("Addinga new note")
        const note = {
            "_id": "62d2a260b36a3bf06b3dfda4",
            "user": "62d12cabe1727842b2aef99c",
            "title": "my title",
            "description": "the info is getting ssaved",
            "tag": "personal",
            "date": "2022-07-16T11:34:56.514Z",
            "__v": 0
        }
        setNotes(notes.push(note))
    }

    // DELETE a Note
    const deleteNote = ()=>{

    }

    // UPDATE a Note
    const updateNote = ()=>{

    }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;
