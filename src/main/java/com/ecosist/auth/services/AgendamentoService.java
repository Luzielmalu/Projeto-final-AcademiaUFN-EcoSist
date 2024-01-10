package com.ecosist.auth.services;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
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

    private static final Logger logger = LoggerFactory.getLogger(AgendamentoService.class);

	@Autowired
	private final AgendamentoRepository agendamentoRepository;
	@Autowired
	private final UserRepository repository;
	@Autowired
	private final CadastroRepository cadastroRepository;
	
	
	public AgendamentoService(AgendamentoRepository agendamentoRepository,UserRepository repository,
            CadastroRepository cadastroRepository ) {
		this.agendamentoRepository = agendamentoRepository;
		this.repository = repository;
		this.cadastroRepository = cadastroRepository;
			
	}

		
	@Transactional
	public void inicializarAgendamento() {}
        
	
	@Transactional
    public List<Map<String, Object>> getAllAgendamentos() {
		logger.info("Iniciando busca de todos os agendamentos.");
        List<Agendamento> agendamentos = agendamentoRepository.findAllWithJoinFetch();
        logger.info("Total de agendamentos encontrados: {}", agendamentos.size());
        return agendamentos.stream()
            .map(Agendamento::toJSON)
            .collect(Collectors.toList());
    }
	
	//public List<Agendamento> getAllAgendamentos() {
		//return (List<Agendamento>) agendamentoRepository.findAll();
		//}
	
	public List<Agendamento> buscarAgendamentosPorCpf(String cpfCnpj) {
        return agendamentoRepository.findByCpfCnpj(cpfCnpj);
    }
	public Agendamento getAgendamentoById(Long id) {
		Optional<Agendamento> optionalAgendamento = (Optional<Agendamento>) agendamentoRepository.findById(id);
	    return optionalAgendamento.orElse(null);	
		}
	public Agendamento updateAgendamento(Long id, Agendamento agendamento) {
        if (agendamentoRepository.existsById(id)) {
        	agendamento.setId(id);
            return agendamentoRepository.save(agendamento);
        } else {
             throw new EntityNotFoundException("Agendamento não encontrado com ID: " + id);

       }
	}
	
	
	@Transactional  //verifica o cpf ou cnpj no cadastro e o nome em user, para poder relacionar os ids em agendamentos.
	public Agendamento createAgendamento(Agendamento novoAgendamento) {
	    try {
	        List<Cadastro> cadastros = cadastroRepository.findByCpfCnpj(novoAgendamento.getCpfCnpj());
	        Cadastro cadastro = cadastros.stream().findFirst()
	                .orElseThrow(() -> new EntityNotFoundException("Nenhum cadastro encontrado com o CPF/CNPJ: " + novoAgendamento.getCpfCnpj()));

	        Optional<User> optionalUser = repository.findByNome(novoAgendamento.getNome());
	        User user = optionalUser.orElseThrow(() -> new EntityNotFoundException("User não encontrado com o nome: " + novoAgendamento.getNome()));

	        novoAgendamento.setCadastro(cadastro);
            novoAgendamento.setUser(user);
	        
            //verifica se o horário está disponível
	        if (isHorarioDisponivel(novoAgendamento.getHorario())) {
	          
	            return agendamentoRepository.save(novoAgendamento);
	        } else {
	            throw new Exception("Horário já agendado. Escolha outro horário.");
	        }
	    } catch (EntityNotFoundException e) {
	        throw e; // Rejeita a exceção
	    } catch (Exception e) {
	        throw new RuntimeException("Erro ao criar agendamento", e);
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
	
	@Transactional
	public void deleteAgendamento(Long id) {
		agendamentoRepository.deleteById(id);
	}


	



	
}
