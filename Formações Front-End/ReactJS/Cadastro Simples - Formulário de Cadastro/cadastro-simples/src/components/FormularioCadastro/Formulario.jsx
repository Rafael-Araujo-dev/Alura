import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core/';

const FormularioCadastro = ({aoEnviar, validarCPF}) => {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [cpf, setCPF] = useState();
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(false);
    const [erros, setErros] = useState(
        {
            cpf:{
                valido:true, 
                texto:""
            }
        });

    return (
        <>
            <form
                onSubmit={(event) => {            
                    event.preventDefault();
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades});
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
                  onChange={(event) => {
                        setCPF(event.target.value);
                  }
                }
                    onBlur={(event) => {
                        const isValido = validarCPF(event.target.value);
                        setErros({cpf: isValido})
                    }}
                    error={!erros.cpf.valido}
                    helperText={erros.cpf.texto}
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
                           onChange={(event) => {
                                setPromocoes(event.target.checked);
                           }}
                            name="promocoes"
                            checked={promocoes}
                            color="primary"
                        />
                    } 
                />
                
                <FormControlLabel
                    label="Novidades"
                    control={
                        <Switch
                           onChange={(event) => {
                               setNovidades(event.target.checked);
                           }}
                            name="novidades"
                            checked={novidades}
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