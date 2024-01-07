package com.ecosist.auth.services;

import java.security.Principal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.ecosist.auth.domain.coleta.Agendamento;
import com.ecosist.auth.domain.coleta.Cadastro;
import com.ecosist.auth.domain.user.User;
import com.ecosist.auth.repositories.AgendamentoRepository;
import com.ecosist.auth.repositories.CadastroRepository;
import com.ecosist.auth.repositories.UserRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;


@Service
public class AgendamentoService {

	@Autowired
	private final AgendamentoRepository agendamentoRepository;
	@Autowired
	private final UserRepository userRepository;
	@Autowired
	private final CadastroRepository cadastroRepository;
	private User user;
	private Cadastro cadastro;
	private String user_Id;
	private Long cadastro_Id;
	
	public AgendamentoService(AgendamentoRepository agendamentoRepository,UserRepository userRepository,
            CadastroRepository cadastroRepository ) {
		this.agendamentoRepository = agendamentoRepository;
		this.userRepository = userRepository;
		this.cadastroRepository = cadastroRepository;
			
	}

		
	@Transactional
	public void inicializarAgendamento(Agendamento agendamento) {
	    
	    Agendamento novoAgendamento = new Agendamento();
	    novoAgendamento.setUser(agendamento.getUser());
	    novoAgendamento.setCadastro(agendamento.getCadastro());
	    novoAgendamento.setData(agendamento.getData());
	    novoAgendamento.setHorario(agendamento.getHorario());
	    novoAgendamento.setCpfCnpj(agendamento.getCpfCnpj());
	    novoAgendamento.setEnderecoColeta(agendamento.getEnderecoColeta());
	    novoAgendamento.setQuantOleo(agendamento.getQuantOleo());
	    novoAgendamento.setStatusColeta(agendamento.getStatusColeta());
	
		// Salvar o agendamento
		agendamentoRepository.save(novoAgendamento);    
		
	}
	

	public List<Agendamento> getAllAgendamentos() {
		return (List<Agendamento>) agendamentoRepository.findAll();
		}
	
	public List<Agendamento> buscarAgendamentosPorCpf(String cpfCnpj) {
        return agendamentoRepository.findByCpfCnpj(cpfCnpj);
    }
	public Agendamento getAgendamentoById(Long id) {
		Agendamento agendamento = agendamentoRepository.findByIdWithCadastroAndUser(id);
	    return agendamento;
		}
	public Agendamento updateAgendamento(Long id, Agendamento agendamento) {
        if (agendamentoRepository.existsById(id)) {
        	agendamento.setId(id);
            return agendamentoRepository.save(agendamento);
        } else {
             throw new EntityNotFoundException("Agendamento não encontrado com ID: " + id);

       }
	}
	
   public Agendamento createAgendamento(Agendamento novoAgendamento) throws Exception {
		
		if (isHorarioDisponivel(novoAgendamento.getHorario())) {
           return agendamentoRepository.save(novoAgendamento);
       } else {
       	throw new Exception("Horário já agendado. Escolha outro horário.");
       }
		
		}

	private boolean isHorarioDisponivel(String horario) {
		Set<Agendamento> agendamentos = agendamentoRepository.findByHorario(horario);
       return agendamentos.isEmpty(); 
	}
   
 //lógica para atualizar o agendamento por campo específico.
	public Agendamento updateCampoAgendamento(Long id, String campo, String novoValor) {
		Agendamento agendamento = agendamentoRepository.findById(id)
	            .orElseThrow(() -> new AgendamentoNotFoundException(id));

	    switch (campo) {
	        case "dia":
	            agendamento.setData(novoValor);
	            break;
	        case "horario":
	            agendamento.setHorario(novoValor);
	            break;
	        case "cpfCnpj":
	            agendamento.setCpfCnpj(novoValor);
	            break;
	        case "enderecoColeta":
	            agendamento.setEnderecoColeta(novoValor);
	            break;
	        case "quantOleo":
	            agendamento.setQuantOleo(novoValor);
	            break;
	        case "statusColeta":
	            agendamento.setStatusColeta(novoValor);
	            break;
	            
	    }

	    return agendamentoRepository.save(agendamento);
	}
	
	public void deleteAgendamento(Long id) {
		agendamentoRepository.deleteById(id);
	}



	
}
