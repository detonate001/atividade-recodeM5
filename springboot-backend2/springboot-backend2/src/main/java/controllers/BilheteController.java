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

import com.example.demo.Bilhete;
import com.example.demo.BilheteRepository;
import com.example.demo.ResourceNotFoundException;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")

public class BilheteController {

	@Autowired
	private BilheteRepository BilheteRepository;

	//Pegar todos os bilhetes
	@GetMapping("/bilhetes")
	public List<Bilhete> getAllBilhetes(){
		return BilheteRepository.findAll();
	}
	
	//Pegar um bilhete usando seu ID
	@GetMapping("/bilhetes/{id_bilhete}")
	public ResponseEntity<Bilhete> getBilheteById(@PathVariable Long id) {
		Bilhete bilhete = BilheteRepository.findById(id).orElseThrow(() -> new
ResourceNotFoundException("Bilhete nao existe com o id : " + id));
		return ResponseEntity.ok(bilhete);
	}

	//Criar um novo bilhete
	@PostMapping("/bilhetes")
	public Bilhete createBilhete(@RequestBody Bilhete bilhete) {
			return BilheteRepository.save(bilhete);
	}

	//Alterar bilhete
	@PutMapping("/bilhetes/{id_bilhete}")
	public ResponseEntity<Bilhete> updateBilhete(@PathVariable Long id, @RequestBody Bilhete bilheteDetails) {
		Bilhete bilhete = BilheteRepository.findById(id).orElseThrow(() -> new
	ResourceNotFoundException("Bilhete nao existe com id :" + id));
		
		bilhete.setData_bilhete(bilheteDetails.getData_bilhete());
		bilhete.setPromocao(bilheteDetails.getPromocao());
		bilhete.setHora(bilheteDetails.getHora());
		

		Bilhete updatedBilhete = BilheteRepository.save(bilhete);
		return ResponseEntity.ok(updatedBilhete);

		
	}
	
	//Deletar um bilhete
	@DeleteMapping("/bilhetes/{id_bilhete}")
	public ResponseEntity<Map<String, Boolean>> deleteBilhete (@PathVariable Long id) {
		Bilhete bilhete = BilheteRepository.findById(id).orElseThrow(() -> new
ResourceNotFoundException("Bilhete nao existe com id :" + id));			
		BilheteRepository.delete(bilhete);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deletado", Boolean.TRUE);
		return ResponseEntity.ok(response);


	
}
}