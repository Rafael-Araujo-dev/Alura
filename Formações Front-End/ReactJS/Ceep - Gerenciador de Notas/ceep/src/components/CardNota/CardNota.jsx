import React, { Component } from 'react';

import { ReactComponent as DeleteSVG } from '../../assets/img/gear.svg';

import './CardNota.css';

export default class CardNota extends Component {

    remove() {
        const id = this.props.id;
        this.props.removeNote(id);
    }

    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_header">
                    <input type="hidden" key={this.props.index} value={this.props.id}/>
                    <h5 className="card-nota_category">{this.props.category}</h5>
                    <i className="card-nota_icon">{'</>'}</i>
                    <h3 className="card-nota_title">{this.props.title}</h3>
                    <h5 className="card-nota_time">
                        <DeleteSVG onClick={this.remove.bind(this)}/>
                    </h5>
                </header>
                <p className="card-nota_text">{this.props.text}</p>
            </section>
        );
    }
}