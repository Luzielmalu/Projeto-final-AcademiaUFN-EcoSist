package com.ecosist.auth.services;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecosist.auth.domain.coleta.Cadastro;
import com.ecosist.auth.repositories.CadastroRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class CadastroService {
	

	@Autowired
	private final CadastroRepository cadastroRepository;
	
	 
	public CadastroService(CadastroRepository cadastroRepository) {
		this.cadastroRepository= cadastroRepository;
	}	
	
	
	public void inicializarCadastro() {
		Cadastro cadastro = new Cadastro();
		cadastroRepository.save(cadastro);
        
	    
		
	}

    
	public List<Cadastro> getAllCadastros() {
		return (List<Cadastro>) cadastroRepository.findAll();
	}
	
	public Cadastro getCadastroById(Long id) {
		Optional<Cadastro> optionalCadastro = (Optional<Cadastro>) cadastroRepository.findById(id);
	    return optionalCadastro.orElse(null);	
	    
	}
	
	public List<Cadastro> getCadastroByCpfCnpj(String cpfCnpj) {
		return cadastroRepository.findByCpfCnpj(cpfCnpj);
	}

	public Cadastro createCadastro(Cadastro  novoCadastro) {
		return cadastroRepository.save(novoCadastro);
	}
	public Cadastro updateCadastro(Long id, Cadastro cadastro) {
        if (cadastroRepository.existsById(id)) {
            cadastro.setId(id);
            return cadastroRepository.save(cadastro);
        } else {
            return null; 
        }
    }

    public void deleteCadastro(Long id) {
    	cadastroRepository.deleteById(id);
    }


	//lógica para atualizar o cadastro por campo específico
	public Cadastro updateCampoCadastro(Long id, String campo, String novoValor) {
		Cadastro cadastro = cadastroRepository.findById(id)
	            .orElseThrow(() -> new CadastroNotFoundException(id));

	    switch (campo) {
	        case "nomeCompleto":
	            cadastro.setNomeCompleto(novoValor);
	            break;
	        case "dataNascimento":
	            cadastro.setDataNascimento(novoValor);
	            break;
	        case "cpfCnpj":
	            cadastro.setCpfCnpj(novoValor);
	            break;
	        case "telefone":
	            cadastro.setTelefone(novoValor);
	            break;
	        case "email":
	            cadastro.setEmail(novoValor);
	            break;
	        case "cep":
	            cadastro.setCep(novoValor);
	            break;
	        case "enderecoCompleto":
	            cadastro.setEnderecoCompleto(novoValor);
	            break;
	        case "bairroCidEst":
	            cadastro.setBairroCidEst(novoValor);
	            break;
	        case "tipoEndereco":
	            cadastro.setTipoEndereco(novoValor);
	            break;
	        case "pontoReferencia":
	            cadastro.setPontoReferencia(novoValor);
	            break;
	        case "observacao":
	            cadastro.setObservacao(novoValor);
	            break;
	        default:
	            throw new IllegalArgumentException("Campo inválido: " + campo);
	    }

	    return cadastroRepository.save(cadastro);
	}


	

	




	
		
	
}


