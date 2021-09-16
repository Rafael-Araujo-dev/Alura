import React, { Component } from 'react';

import './FormularioCadastro.css';

export default class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.title="";
        this.text="";
    }

    _handleTitleChange(event) {
        event.stopPropagation();
        this.title = event.target.value;
    }
    
    _handleTextChange(event) {
        event.stopPropagation();
        this.text = event.target.value;
    }    

    _handleAddNote = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.props.addNotes(this.title, this.text);
    }
    render() {
        return (
            <form 
                className="form-add-nota"
                onSubmit={this._handleAddNote.bind(this)}
            >
                <input 
                    className="form-title-nota" 
                    type="text" 
                    placeholder="Título"
                    onChange={this._handleTitleChange.bind(this)}
                />
                <textarea 
                    className="form-text-nota" 
                    placeholder="Escreva sua nota..."
                    onChange={this._handleTextChange.bind(this)}
                ></textarea>
                <button 
                    className="btn-add-nota"
                >Criar Nota</button>
            </form>
        );
    }
}