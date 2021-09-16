import React, { Component } from 'react';

import './ListaDeCategorias.css';

export default class ListaDeCategorias extends Component {

    addCategory() {
    
    }

    render() { 
        return (
            <div className="nav-categories">
                <input type="text" placeholder="Adicionar categoria"/>
                <button onClick={this.addCategory.bind(this)}>Adicionar</button>
                <select>
                    <option>Todas categorias</option>
                    <option>Todas categorias</option>
                    <option>Todas categorias</option>
                    <option>Todas categorias</option>
                    <option>Todas categorias</option>
                </select>
            </div>
        )
    }
}