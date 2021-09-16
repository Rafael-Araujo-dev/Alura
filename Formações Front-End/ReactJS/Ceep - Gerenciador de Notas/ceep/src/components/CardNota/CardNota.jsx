import React, { Component } from 'react';

import './CardNota.css';

export default class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_header">
                    <input type="hidden" key={this.props.index} value={this.props.id}/>
                    <h5 className="card-nota_category"></h5>
                    <i className="card-nota_icon">{'</>'}</i>
                    <h3 className="card-nota_title">{this.props.title}</h3>
                    <h5 className="card-nota_time"><i className="fa fa-gear"></i></h5> {/* settings */}
                </header>
                <p className="card-nota_text">{this.props.text}</p>
            </section>
        );
    }
}