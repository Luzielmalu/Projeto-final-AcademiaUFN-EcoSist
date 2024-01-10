package com.ecosist.auth.repositories;

import java.util.List;
import java.util.Set;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ecosist.auth.domain.coleta.Agendamento;


public interface AgendamentoRepository extends JpaRepository<Agendamento, Long>{

	Set<Agendamento> findByHorario(String horario);


	List<Agendamento> findByCpfCnpj(String cpfCnpj);


	@Query("SELECT DISTINCT a FROM Agendamento a LEFT JOIN FETCH a.user LEFT JOIN FETCH a.cadastro")
    List<Agendamento> findAllWithJoinFetch();

	

	

}
