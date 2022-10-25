// Codigo para visualizar os Clientes
import React, { Component } from 'react'
import ClienteService from '../services/ClienteService'

class ViewClienteComponent extends Component {
     constructor(props) {
         super(props)
 
         this.state = {
             id: this.props.match.params.id,
             cliente: {}
        }
 }
        componentDidMount(){
        ClienteService.getClienteById(this.state.id).then( res => {
        this.setState({cliente: res.data});
        })
    }
 
    render() {
         return (
            <div>
                <br></br>
            <div className = "card col-md-6 offset-md-3">
            <h3 className = "text-center"> Dados do Cliente</h3>
            <div className = "card-body">
            <div className = "row">
        <label> Email: </label>
            <div> { this.state.cliente.email }</div>
        </div>
            <div className = "row">
        <label> CPF: </label>
                <div> { this.state.cliente.cpf }</div>
             </div>
            <div className = "row">
                 <label> Senha: </label>
            <div> { this.state.cliente.senha }</div>
            <div className = "row">
        <label > Data de nascimento: </label>
                <div> { this.state.cliente.data_nascimento }</div>
                <div className = "row">
        <label > Data de nascimento: </label>
                <div> { this.state.cliente.data_nascimento }</div>
            </div>
        </div>
    </div>
 </div>
 </div>
 </div>
 )
 }
}
export default ViewClienteComponent