import React, { useState } from "react";

const States = () => {

    const [notes, setNotes] = useState([]);

    const addNotes =() => {
        setNotes([... notes, {
            id: notes.length,
            value: 'title'
        }]);
    }

    return (
        <>
            <button onClick={addNotes}>
                Add a number
            </button>
            <ul>
                {
                    notes.map(note => (
                        <li key={note.id}>{note.id} - {note.value}</li>
                    ))
                }
            </ul>    
        </>
    );
}

export default States;