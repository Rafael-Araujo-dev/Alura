import React, { Component } from 'react';

import CardNota from '../CardNota/CardNota';
import './ListaDeNotas.css';

export default class ListaDeNotas extends Component {

    constructor() {
        super();
        this.state = {notes:[]}

        this._newNotes = this._newNotes.bind(this);
    }

    componentDidMount() {
        this.props.notes.subscribe(this._newNotes);
    }

    componentWillUnmount() {
        this.props.notes.unsubscribe(this._newNotes);
    }

    _newNotes(notes) {
        this.setState({...this.state, notes})
    }

    render () {
        return (
            <ul className="container-lista-notas">
                {
                    this.state.notes.map((note, index) => {
                        return (
                            <CardNota 
                                removeNote={this.props.removeNote}
                                key={index}
                                id={note.id} 
                                title={note.title}
                                text={note.text}
                                category={note.category}
                            />
                        );
                    })}
            </ul>
        );
    }
}