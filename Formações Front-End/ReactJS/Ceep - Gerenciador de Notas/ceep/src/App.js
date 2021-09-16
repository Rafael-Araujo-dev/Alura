import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';

export default class App extends Component {

  constructor() {
      super();

    this.state = {
      notes:[],
      categories:["Geral"],
    }
  }

  addCategory(text) {
    const newArrayCategories = [...this.state.categories, text]
    const newState = {...this.state, categories:newArrayCategories};
    this.setState(newState);
  }

  addNotes(id, title, text, category) {
    id = this.state.notes.length;
    const newNote = {id, title, text, category};
    console.log(newNote);
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
        <ListaDeCategorias 
          addCategory={this.addCategory.bind(this)}
          categories={this.state.categories}
        />
        <FormularioCadastro
          categories={this.state.categories} 
          addNotes={this.addNotes.bind(this)} 
        />
        <ListaDeNotas 
          removeNote={this.removeNote.bind(this)}
          notes={this.state.notes} 
        />
      </section>  
    );
  }
}