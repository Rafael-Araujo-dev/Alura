import React, { Component } from 'react';

import './App.css';
import FormularioCadastro from './components/FormularioCadastro/Formulario';

import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default class App extends Component {

  render() {
    return (
      <Container 
        component="article"
        maxWidth="sm"
      >
        <Typography 
          variant="h3"
          component="h1"
        >Formulário de Cadastro</Typography>
        <FormularioCadastro 
          aoEnviar={aoEnviarForm} 
          validarCPF={validarCPF}
        />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

const validarCPF = (CPF) => {
  return CPF.length !== 11 ? {valido: false, texto: "CPF deve ter 11 dígitos"} : {valido: true, texto: ""};
}