import React from 'react';

import './CardNota.css';

const CardNota = (props) => {

    let id = props.id;
    let title = props.title;
    let text = props.text;

    return (
        <section className="card-nota">

            <header className="card-nota_header">
                <input type="hidden" key={id} value={id}/>
                <h5 className="card-nota_category"></h5>
                <i className="card-nota_icon">{'</>'}</i>
                <h3 className="card-nota_title">{title}</h3>
                <h5 className="card-nota_time"><i className="fa fa-gear"></i></h5> {/* settings */}
            </header>
            <p className="card-nota_text">{text}</p>
        </section>
    );
}

export default CardNota;