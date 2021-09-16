import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';

export default class App extends Component {

  constructor() {
      super();

    this.state = {
      notes:[],
    }
  }
  addNotes(id, title, text) {
    id = this.state.notes.length;
    const newNote = {id, title, text};
    const newArrayNotes = [...this.state.notes, newNote];
    const newState = {
      notes:newArrayNotes
    }
    this.setState(newState)
  }

  removeNote(index) {
    let arrayNotes = this.state.notes;
    arrayNotes.splice(index,1);
    this.setState({notes:arrayNotes});  
  }

  render() {
    return (
      <section>
        <ListaDeCategorias />
        <FormularioCadastro addNotes={this.addNotes.bind(this)} />
        <ListaDeNotas 
          removeNote={this.removeNote.bind(this)}
          notes={this.state.notes} 
        />
      </section>  
    );
  }
}