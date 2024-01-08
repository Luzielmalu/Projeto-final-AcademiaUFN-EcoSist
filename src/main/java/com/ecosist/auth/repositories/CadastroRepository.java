package com.ecosist.auth.repositories;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.ecosist.auth.domain.coleta.Cadastro;
import com.ecosist.auth.domain.user.User;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Long>{
	Optional<Cadastro> findById(Long id);


	List<Cadastro> findByCpfCnpj(String cpfCnpj);


	Optional<Cadastro> findById(Cadastro cadastro);




	



	

	
	

	

}
