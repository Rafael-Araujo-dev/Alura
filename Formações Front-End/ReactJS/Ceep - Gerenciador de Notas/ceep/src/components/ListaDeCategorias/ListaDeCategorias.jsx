import React, { Component } from 'react';

import './ListaDeCategorias.css';

export default class ListaDeCategorias extends Component {

    constructor(props) {
        super(props);
        this.categoryValue = "";
    }

    _handleCategoryChange(event) {
        event.stopPropagation();
        this.categoryValue = event.target.value;
    }

    addCategory() {
        if(this.categoryValue.trim() != "") {
            this.props.addCategory(this.categoryValue);
        }
    }

    render() { 
        return (
            <div className="nav-categories">
                <input
                    onChange={this._handleCategoryChange.bind(this)} 
                    type="text" 
                    placeholder="Adicionar categoria"
                />
                <button onClick={this.addCategory.bind(this)}>Adicionar</button>
            </div>
        )
    }
}