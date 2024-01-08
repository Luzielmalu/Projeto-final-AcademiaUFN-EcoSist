package com.ecosist.auth.repositories;

import java.time.LocalDate;
import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecosist.auth.domain.coleta.Agendamento;


public interface AgendamentoRepository extends JpaRepository<Agendamento, Long>{

	Set<Agendamento> findByHorario(String horario);


	List<Agendamento> findByCpfCnpj(String cpfCnpj);

	@Query("SELECT a FROM Agendamento a JOIN FETCH a.cadastro JOIN FETCH a.user WHERE a.id = :id")
	Agendamento findByIdWithCadastroAndUser(Long id);


	

	

}
