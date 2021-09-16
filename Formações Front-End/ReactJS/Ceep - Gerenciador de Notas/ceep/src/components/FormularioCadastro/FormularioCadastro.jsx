import React, { Component } from 'react';

import './FormularioCadastro.css';

export default class FormularioCadastro extends Component {

    constructor(props) {
        super(props);
        this.id=0;
        this.title="";
        this.text="";
        this.category="Geral";
    }

    _handleCategoryChange(event) {
        event.stopPropagation();
        this.category = event.target.value;
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
        if(this.title.trim() != "" && this.text.trim() != "") {
            this.props.addNotes(this.id, this.title, this.text, this.category);
            console.log(this.category);
        }
    }
    render() {
        return (
            <form 
                className="form-add-nota"
                onSubmit={this._handleAddNote.bind(this)}
            >   
                <label>Categoria:</label>
                <select onChange={this._handleCategoryChange.bind(this)} className="form-select-category">
                    {this.props.categories.map((category, index) => {
                        return (
                            <option key={index}>{category}</option>
                        )
                    })}
                </select>
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