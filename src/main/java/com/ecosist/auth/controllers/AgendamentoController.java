package com.ecosist.auth.controllers;

import java.util.List;
import java.util.Map;

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
import com.ecosist.auth.services.AgendamentoService;
import com.ecosist.auth.services.CadastroService;

import jakarta.persistence.EntityNotFoundException;


@RestController
@RequestMapping(path="/agendamento")
public class AgendamentoController {
	
	@Autowired
	private final AgendamentoService agendamentoService;
	
	
	
	
	public AgendamentoController(AgendamentoService agendamentoService, CadastroService cadastroService ) {
		this.agendamentoService = agendamentoService;
		
	}
	
	
	public void init() {
		Agendamento novoAgendamento = new Agendamento();
		agendamentoService.inicializarAgendamento();
	}
	
	@GetMapping
    public ResponseEntity<List<Map<String, Object>>> getAllAgendamentos() {
        List<Map<String, Object>> agendamentos = agendamentoService.getAllAgendamentos();
        return new ResponseEntity<>(agendamentos, HttpStatus.OK);
    }

	//@GetMapping
	//public List<Agendamento> getAllAgendamentos(){
		//return agendamentoService.getAllAgendamentos();
	//}
	
	@GetMapping("/{id}")
	public Agendamento getAgendamentoById(@PathVariable Long id) {
		return agendamentoService.getAgendamentoById(id);
	}
	@GetMapping("/agendamento/{id}")
	public ResponseEntity<Agendamento> getAgendamentoWithDetails(@PathVariable Long id) {
	    Agendamento agendamento = agendamentoService.getAgendamentoById(id);

	    if (agendamento != null) {
	        agendamento.getUser(); 
	        agendamento.getCadastro(); 

	        return new ResponseEntity<>(agendamento, HttpStatus.OK);
	    } else {
	        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	@GetMapping("/cpfCnpj")
    public ResponseEntity<List<Agendamento>> buscarPorCpfCnpj(@RequestParam String cpfCnpj) {
        List<Agendamento> agendamentos = agendamentoService.buscarAgendamentosPorCpf(cpfCnpj);
        return ResponseEntity.ok(agendamentos);
    }
	
	
	@PostMapping
    public ResponseEntity<Agendamento> createAgendamento(@RequestBody Agendamento novoAgendamento) {
        try {
            //agendamentoService.inicializarAgendamento(novoAgendamento);

        	agendamentoService.createAgendamento(novoAgendamento);
            return new ResponseEntity<>(novoAgendamento, HttpStatus.CREATED);
        } catch (EntityNotFoundException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        
    }
	
	@PutMapping("/{id}")
	public Agendamento updateAgendamento(@PathVariable Long id, @RequestBody Agendamento agendamento) throws Exception {
         return agendamentoService.updateAgendamento(id, agendamento);
		
	}
	
	@PutMapping("/{id}/{campo}")
	public ResponseEntity<Agendamento> updateCampoAgendamento(
	    @PathVariable Long id,
	    @PathVariable String campo,
	    @RequestParam String novoValor) {

		Agendamento agendamentoAtualizado = agendamentoService.updateCampoAgendamento(id, campo, novoValor);

	    if (agendamentoAtualizado != null) {
	        return ResponseEntity.ok(agendamentoAtualizado);
	    } else {
	        return ResponseEntity.notFound().build(); // Agendamento não encontrado
	    }
	}
	@DeleteMapping("/{id}")
	public void deleteAgendamento(@PathVariable Long id) {
		agendamentoService.deleteAgendamento(id);
	}
	
	
}





