import React, {useState} from 'react';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';

const App = () => {

  const [notes, setNotes] = useState([
                                      {
                                        id: 0,
                                        title: 'Lorem Ipsum',
                                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper, odio et sollicitudin euismod, magna lorem ultricies sapien, vel volutpat felis nunc tempus felis. '
                                      }
                                    ]);

  const addNotes = (title, text) => {
    setNotes([...notes, {
      id: notes.length,
      title: title,
      text: text
    }]);
  }

  return (
    <section>
      <FormularioCadastro addNotes={addNotes} />
      <ListaDeNotas notes={notes} />
    </section>  
  );
}

export default App;
