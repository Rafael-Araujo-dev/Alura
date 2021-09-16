import React from 'react';

import './FormularioCadastro.css';

let title = "";
let text = "";

const handleTitleChange = (event) => {
    title = event.target.value;
}

const handleTextChange = (event) => {
    text = event.target.value;
}

const FormularioCadastro = (props) => {

    const handleCreateNote = (event) => {
        event.preventDefault();
        props.addNotes(title, text);
    }
    
    return (
        <form 
            className="form-add-nota"
            onSubmit={handleCreateNote}
        >
            <input 
                className="form-title-nota" 
                type="text" 
                placeholder="Título"
                onChange={handleTitleChange}
            />
            <textarea 
                className="form-text-nota" 
                placeholder="Escreva sua nota..."
                onChange={handleTextChange}
            ></textarea>
            <button 
                className="btn-add-nota"
            >Criar Nota</button>
        </form>
    );
}

export default FormularioCadastro;