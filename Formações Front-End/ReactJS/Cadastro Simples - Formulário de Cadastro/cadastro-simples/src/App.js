import React, { Component, Fragment } from 'react';

import './App.css';
import FormularioCadastro from './components/FormularioCadastro/Formulario';

export default class App extends Component {

  render() {
    return (
      <Fragment>
        <h1>Formulário de Cadastro</h1>
        <FormularioCadastro />
      </Fragment>
    );
  }
}