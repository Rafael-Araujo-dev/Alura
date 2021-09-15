import React from 'react';

import CardNota from '../CardNota/CardNota';
import './ListaDeNotas.css';

const ListaDeNotas = () => {
    return (
        <ul className="container-lista-notas">
            {Array.of("Trabalho", "Trabalho", "Trabalho", "Trabalho", "Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
                return (
                    <li key={index}>
                        <CardNota categoria={categoria}/>
                    </li>
                );
            })}
        </ul>
    );
}

export default ListaDeNotas;