package com.ecosist.auth.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecosist.auth.domain.coleta.Agendamento;
import com.ecosist.auth.domain.coleta.Cadastro;
import com.ecosist.auth.services.CadastroService;


@RestController
@RequestMapping(path="/cadastro")
public class CadastroController {
	
	@Autowired
	private final CadastroService cadastroService;
	
	public CadastroController(CadastroService cadastroService) {
		this.cadastroService = cadastroService;
	}
	public void init() {
		cadastroService.inicializarCadastro();
	}
	//lista todos os cadastros
	@GetMapping
	public List<Cadastro> getAllCadastros(){
		return cadastroService.getAllCadastros();
	}
	//busca o cadastro pelo id
	@GetMapping("/{id}")
	public Cadastro getCadastroById(@PathVariable Long id) {
		return cadastroService.getCadastroById(id);
	}
	//busca o cadastro pelo cpf ou cnpj
	@GetMapping("/cpfCnpj")
    public ResponseEntity<List<Cadastro>> buscarPorCpfCnpj(@RequestParam String cpfCnpj) {
		 try {
        List<Cadastro> cadastros = cadastroService.getCadastroByCpfCnpj(cpfCnpj);
        return ResponseEntity.ok(cadastros);
		 } catch (Exception e) {
		        // Log the exception
		        e.printStackTrace();
		        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		    }
	}
	@PostMapping
	public Cadastro createCadastro(@RequestBody Cadastro novoCadastro) {
		return cadastroService.createCadastro(novoCadastro);
	}
	
	@PutMapping("/{id}")
	public Cadastro updateCadastro(@PathVariable Long id, @RequestBody Cadastro cadastro) {
		return cadastroService.updateCadastro(id, cadastro);
	}
	
	@PutMapping("/{id}/{campo}")//atualiza o campo desejado no cadastro
	public ResponseEntity<Cadastro> updateCampoCadastro(
	    @PathVariable Long id,
	    @PathVariable String campo,
	    @RequestParam String novoValor) {

		Cadastro cadastroAtualizado = cadastroService.updateCampoCadastro(id, campo, novoValor);

	    if (cadastroAtualizado != null) {
	        return ResponseEntity.ok(cadastroAtualizado);
	    } else {
	        return ResponseEntity.notFound().build(); // Cadastro não encontrado
	    }
	}
		
	@DeleteMapping("/{id}")
	public void deleteCadastro(@PathVariable Long id) {
		cadastroService.deleteCadastro(id);
	}
	
	
}



