package controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Cliente;
import com.example.demo.ClienteRepository;
import com.example.demo.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class ClienteController {

	@Autowired
	private ClienteRepository clienteRepository;

	//Pegar todos os clientes
	@GetMapping("/clientes")
	public List<Cliente> getAllClientes(){
		return clienteRepository.findAll();
	}
	
	//Pegar um cliente usando seu ID
	@GetMapping("/clientes/{id_cliente}")
	public ResponseEntity<Cliente> getClienteById(@PathVariable Long id) {
		Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new
ResourceNotFoundException("Cliente nao existe com o id : " + id));
		return ResponseEntity.ok(cliente);
	}

	//Criar um novo cliente
	@PostMapping("/clientes")
	public Cliente createCliente(@RequestBody Cliente cliente) {
			return clienteRepository.save(cliente);
	}

	//Alterar cliente
	@PutMapping("/clientes/{id_cliente}")
	public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente clienteDetails) {
		Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new
	ResourceNotFoundException("Cliente nao existe com id :" + id));
		
		cliente.setEmail(clienteDetails.getEmail());
		cliente.setCpf(clienteDetails.getCpf());
		cliente.setSenha(clienteDetails.getSenha());
		cliente.setData_nascimento(clienteDetails.getData_nascimento());

		Cliente updatedCliente = clienteRepository.save(cliente);
		return ResponseEntity.ok(updatedCliente);

		
	}
	
	//Deletar um cliente
	@DeleteMapping("/clientes/{id_cliente}")
	public ResponseEntity<Map<String, Boolean>> deleteCliente (@PathVariable Long id) {
		Cliente cliente = clienteRepository.findById(id).orElseThrow(() -> new
ResourceNotFoundException("Cliente nao existe com id :" + id));			
		clienteRepository.delete(cliente);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);


	
}
}
