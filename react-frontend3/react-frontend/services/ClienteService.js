// Cria a classe de servico ClienteService para realizar as chamadas HTTP REST via Axios
import axios from 'axios';

const CLIENTE_API_BASE_URL = "http://localhost:8080/api/v1/clientes";

class ClienteService {
 getClientes(){
 return axios.get(CLIENTE_API_BASE_URL);
 }
 createCliente(cliente){
 return axios.post(CLIENTE_API_BASE_URL, cliente);
 }
 getClienteById(clienteId_cliente){
 return axios.get(CLIENTE_API_BASE_URL + '/' + clienteId_cliente);
 }
 updateCliente(cliente, clienteId_cliente){
 return axios.put(CLIENTE_API_BASE_URL + '/' + clienteId_cliente, cliente);
 }
 deleteCliente(clienteId_cliente){
 return axios.delete(CLIENTE_API_BASE_URL + '/' + clienteId_cliente);
 }
}
export default new ClienteService()
