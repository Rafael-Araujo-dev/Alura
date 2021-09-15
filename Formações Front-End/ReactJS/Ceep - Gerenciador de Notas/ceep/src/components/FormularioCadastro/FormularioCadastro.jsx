import React from 'react';

import './FormularioCadastro.css';

const FormularioCadastro = () => {
    return (
        <form className="form-add-nota">
            <input className="form-title-nota" type="text" placeholder="Título"/>
            <textarea className="form-text-nota" placeholder="Escreva sua nota..."></textarea>
            <button className="btn-add-nota">Criar Nota</button>
        </form>
    );
}

export default FormularioCadastro;