import React from 'react';

import './CardNota.css';

const CardNota = ({categoria}) => {
    return (
        <section className="card-nota">
            <header className="card-nota_header">
                <h5 className="card-nota_category">{categoria}</h5>
                <i className="card-nota_icon">{'</>'}</i>
                <h3 className="card-nota_title">Lorem ipsum</h3>
                <h5 className="card-nota_time">2 days ago</h5>
            </header>
            <p className="card-nota_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae rhoncus massa. Morbi venenatis neque quis ante mattis, vel interdum leo imperdiet. </p>
        </section>
    );
}

export default CardNota;