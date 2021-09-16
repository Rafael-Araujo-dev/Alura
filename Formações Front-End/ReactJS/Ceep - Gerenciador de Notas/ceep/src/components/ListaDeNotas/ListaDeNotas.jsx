import React from 'react';

import CardNota from '../CardNota/CardNota';
import './ListaDeNotas.css';

const ListaDeNotas = (props) => {
    return (
        <ul className="container-lista-notas">
            {
                props.notes.map(note => 
                    (
                        <CardNota 
                            id={note.id} 
                            title={note.title}
                            text={note.text}
                            />
                ))
            }    
        </ul>
    );
}

export default ListaDeNotas;