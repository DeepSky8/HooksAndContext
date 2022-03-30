import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";
import useMousePosition from "../hooks/useMousePosition";

const AddNoteForm = () => {
    const position = useMousePosition()
    const { dispatch } = useContext(NotesContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_NOTE', note: { title, body } })
        setTitle('');
        setBody('');
    }


    return (
        <div>
            <p>Add Note {position.x} - {position.y}</p>
            <form onSubmit={addNote}>
                <input
                    value={title}
                    onChange={
                        (e) => setTitle(e.target.value)
                    } />
                <textarea
                    value={body}
                    onChange={
                        (e) => setBody(e.target.value)
                    } />
                <button>Add Note</button>
            </form>
        </div>
    )

}

export { AddNoteForm as default }