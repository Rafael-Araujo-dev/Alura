import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core/';

const FormularioCadastro = () => {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();


    return (
        <>
            <form
                onSubmit={(event) => { 
                    console.log(nome); 
                    console.log(sobrenome);
                    event.preventDefault();
                }}
            >
                <TextField
                  onChange={
                      (event) => {
                        setNome (event.target.value);
                      }
                  }
                    id="nome"
                    label="Nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <TextField
                  onChange={(event) => {
                        setSobrenome (event.target.value);
                    }
                  }
                    id="sobrenome"
                    label="Sobrenome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

               <TextField
                    id="cpf"
                    label="CPF"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />

                <FormControlLabel
                    label="Promoções"
                    control={
                        <Switch
                            name="promocoes"
                            defaultChecked
                            color="primary"
                        />
                    } 
                />
                
                <FormControlLabel
                    label="Novidades"
                    control={
                        <Switch
                            name="novidades"
                            defaultChecked
                            color="primary"
                        />
                    }
                />

                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                >Cadastrar</Button>
            </form>
        </>
    );
}

export default FormularioCadastro;