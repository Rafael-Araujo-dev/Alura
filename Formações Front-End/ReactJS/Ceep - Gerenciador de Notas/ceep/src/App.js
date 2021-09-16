import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';

export default class App extends Component {

  constructor() {
      super();

    this.state = {
      notes:[]
    }
  }
  addNotes(title, text) {
    const newNote = {title, text};
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes:newArrayNotes
    }
    this.setState(newState)
  }

  render() {
    return (
      <section>
        <FormularioCadastro addNotes={this.addNotes.bind(this)} />
        <ListaDeNotas notes={this.state.notes} />
      </section>  
    );
  }
}