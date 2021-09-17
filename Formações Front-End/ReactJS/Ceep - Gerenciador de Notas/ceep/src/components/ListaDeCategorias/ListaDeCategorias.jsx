import React, { Component } from 'react';

import './ListaDeCategorias.css';

export default class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = {categories:[]}
        this._newCategories = this._newCategories.bind(this);
    }

    componentDidMount() {
        this.props.categories.subscribe(this._newCategories);
    }

    componentWillUnmount() {
        this.props.categories.unsubscribe(this._newCategories);
    }

    _newCategories(categories) {
        this.setState({...this.state, categories});
    }

    _handleCategoryChange(event) {
        event.stopPropagation();
        this.categoryValue = event.target.value;
    }

    addCategory() {
        if(this.categoryValue.trim() != "") {
            this.props.categories.addCategory(this.categoryValue);
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