// Criar a pagina para adicionar e alterar um Cliente
import React, { Component } from 'react'
import ClienteService from '../../services/ClienteService';

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

                changeEmailHandler= (event) => {
                    this.setState({email: event.target.value});
                    }
                    changeCpfHandler= (event) => {
                    this.setState({cpf: event.target.value});
                    }
                    changeSenhaHandler= (event) => {
                    this.setState({senha: event.target.value});
                    changeData_nascimentoHandler= (event) => {
                    this.setState({data_nascimento: event.target.value});
                    }
                 }
                   
                 cancel(){
                    this.props.history.push('/clientes');
                 }

                 getTitle(){
                    if(this.state.id === '_add'){
                    return <h3 className="text-center">Inserir Cliente</h3>
                    }else{
                    return <h3 className="text-center">Alterar Dados Cliente</h3>
                    }
                    }
                    render() {
                        return (
                        <div>
                             <br></br>
                                <div className = "container">
                                    <div className = "row">
                                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                        this.getTitle()
                        }
                       <div className = "card-body">
                            <form>
                            
                                 <div className = "form-group">
                                        <label> Email: </label>
                        <input placeholder="Email" name="email" className="form-control"
                        value={this.state.email} 
                        onChange={this.changeEmailHandler}/>
                            </div>
            <div className = "form-group">
                     <label> Cpf: </label>
                            <input placeholder="Cpf" name="cpf" className="form-control"
                         value={this.state.cpf} onChange={this.changeCpfHandler}/>
            </div>
                <div className = "form-group">
                    <label> Senha: </label>
            <input placeholder="Senha" name="senha" className="form-control"
                    value={this.state.senha} onChange={this.changeSenhaHandler}/>
            </div>
            
            
                <div className = "form-group">
                    <label> Data de nascimento: </label>
            <input placeholder="Data_nascimento" name="data_nascimento" className="form-control"
                    value={this.state.data_nascimento} onChange={this.changeData_nascimentoHandler}/>
            </div>

            <button className="btn btn-success"
                onClick={this.saveOrUpdateCliente}>Salvar</button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} 
            style={{marginLeft: "10px"}}>Cancelar</button>
                       
                       </form>
                </div>
            </div>
        </div>
    </div>
 </div>
 )
 }
}
export default CreateClienteComponent


               
                






    