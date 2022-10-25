// Componente para listar os Clientes 
import React, { Component } from 'react'
import ClienteService from '../services/ClienteService'

class ListClienteComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clientes: []

        }
        this.addCliente = this.addCliente.bind(this);
        this.editCliente = this.editCliente.bind(this);
        this.deleteCliente = this.deleteCliente.bind(this);
        }

        deleteCliente(id_cliente){
            ClienteService.deleteCliente(id_cliente).then( res => {
            this.setState({clientes: this.state.clientes.filter(cliente => cliente.id_cliente !== id_cliente)});
        });
    }
    viewCliente(id_cliente){
        this.props.history.push(`/view-cliente/${id_cliente}`);
    }
    editCliente(id_cliente){
        this.props.history.push(`/add-cliente/${id_cliente}`);
    }
    componentDidMount(){
        ClienteService.getClientes().then((res) => {
        this.setState({ clientes: res.data});
    });
}
addCliente(){
    this.props.history.push('/add-cliente/_add');
}

render() {
    return (
        <div>
 <h2 className="text-center">Lista de Clientes</h2>
 <div className = "row">
 <button className="btn btn-primary" onClick={this.addCliente}> Inserir Clientes</button>
 </div>
<br></br>
<div className = "row">
        <table className = "table table-striped table-bordered">

                        <thead>
                <tr>
                <th> Email</th>
            <th> Cpf</th>
            <th> Senha</th>
            <th> Data de nascimento</th>
            </tr>
            </thead>
            <tbody>
            {
            this.state.clientes.map(
            cliente => 
            <tr key = {cliente.id_cliente}>
            <td> {cliente.email}</td> 
            <td> {cliente.cpf}</td>
            <td> {cliente.senha}</td>
            <td> {cliente.data_nascimento}</td>
            <td>
            <button onClick={ () => this.editCliente(cliente.id_cliente)}
                className="btn btn-info">Alterar </button>

            <button style={{marginLeft: "10px"}} onClick={ () =>
      this.deleteCliente(cliente.id_cliente)} className="btn btn-danger">Apagar </button>  
        <button style={{marginLeft: "10px"}} onClick={ () =>        
    this.viewCliente(cliente.id_cliente)} className="btn btn-info">Visualizar </button>
    
                             </td>
                        </tr>
                     )
                }
            </tbody>
        </table>
    </div>
 </div>
 )
 }
}
export default ListClienteComponent




