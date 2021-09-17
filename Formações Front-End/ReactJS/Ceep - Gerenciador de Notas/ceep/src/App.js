import React, { Component } from 'react';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import Categories from './data/Categories';
import NotesList from './data/Notas';

export default class App extends Component {

  constructor() {
      super();
      this.categories = new Categories();
      this.notes = new NotesList();
  }

  render() {
    return (
      <section>
        <ListaDeCategorias 
          addCategory={this.categories.addCategory.bind(this.categories)}
          categories={this.categories}
        />
        <FormularioCadastro
          categories={this.categories} 
          addNotes={this.notes.addNotes.bind(this.notes)} 
        />
        <ListaDeNotas 
          removeNote={this.notes.removeNote.bind(this.notes)}
          notes={this.notes} 
        />
      </section>  
    );
  }
}