import React, { Component } from 'react';

import CardNota from '../CardNota/CardNota';
import './ListaDeNotas.css';

export default class ListaDeNotas extends Component {
    render () {
        return (
            <ul className="container-lista-notas">
                {
                    this.props.notes.map((note, index) => {
                        return (
                            <CardNota 
                                key={index}
                                id={note.id} 
                                title={note.title}
                                text={note.text}
                            />
                        );
                    })}
            </ul>
        );
    }
}