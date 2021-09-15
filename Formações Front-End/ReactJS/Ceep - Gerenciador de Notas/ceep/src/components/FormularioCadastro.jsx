import React from 'react';

const FormularioCadastro = () => {
    return (
        <form>
            <input type="text" placeholder="Título"/>
            <textarea placeholder="Escreva sua nota..."></textarea>
            <button>Criar Nota</button>
        </form>
    );
}

export default FormularioCadastro;