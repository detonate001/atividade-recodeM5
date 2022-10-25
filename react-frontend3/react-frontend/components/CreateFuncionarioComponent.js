// Criar a pagina para adicionar e alterar um Cliente
import React, { Component } from 'react'
import ClienteService from '../services/ClienteService';

class CreateClienteComponent extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            id: this.props.match.params.id_cliente,
            email: '',
            cpf: '',
            data_nascimento: ''
        }

    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeCpfHandler = this.changeCpfHandler.bind(this);
    this.saveOrUpdateCliente = this.saveOrUpdateCliente.bind(this);
    this.changeSenhaHandler = this.changeSenhaHandler.bind(this);
    this.changeData_nascimentoHandler = this.changeData_nascimentoHandler.bind(this);
}   

componentDidMount() {

    if(this.state.id === '_add'){
        return
    }else{
        ClienteService.getClienteById(this.state.id).then( (res) =>{
            let cliente = res.data;
            this.setState({email: cliente.email,
            cpf: cliente.cpf,
           senha : cliente.senha,
           data_nascimento : cliente.data_nascimento
        });
    });
    } 
    }

    saveOrUpdateCliente = (e) => {
        e.preventDefault()
   
        let cliente = {email: this.state.email, cpf: this.state.cpf, senha: 
            this.state.senha, data_nascimento: this.state.data_nascimento};
            console.log('cliente => ' + JSON.stringify(cliente));

            if(this.state.id === '_add'){
                    ClienteService.createCliente(cliente).then(res =>{
                        this.props.history.push('/clientes');
                     });
                }else{
                        ClienteService.updateCliente(cliente, this.state.id).then( res => {
                            this.props.history.push('/clientes');
                        });
                    }
                }

                changePrimeiroNomeHandler= (event) => {
                    this.setState({primeiroNome: event.target.value});
                    }
                    changeUltimoNomeHandler= (event) => {
                    this.setState({ultimoNome: event.target.value});
                    }
                    changeEmailHandler= (event) => {
                    this.setState({emailId: event.target.value});
                    }
                    changeEmailHandler= (event) => {
                    this.setState({emailId: event.target.value});
                 }
                   
               






    