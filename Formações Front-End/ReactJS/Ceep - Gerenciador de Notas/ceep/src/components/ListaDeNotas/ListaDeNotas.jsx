import React from 'react';

import CardNota from '../CardNota/CardNota';
import './ListaDeNotas.css';

const ListaDeNotas = () => {
    return (
        <ul className="container-lista">
            {Array.of("Trabalho", "Trabalho", "Trabalho", "Trabalho", "Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                return (
                    <li key={index}>
                        {/* <div>{categoria}</div> */}
                        <CardNota />
                    </li>
                );
            })}
        </ul>
    );
}

export default ListaDeNotas;