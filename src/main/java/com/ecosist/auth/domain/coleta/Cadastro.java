package com.ecosist.auth.domain.coleta;

import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Table(name="cadastros")
public class Cadastro{
	
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long   id;
	private String nomeCompleto;
	private String dataNascimento;
	private String cpfCnpj;
	private String telefone;
	private String email;
	private String cep;
	private String enderecoCompleto;
	private String bairroCidEst;
	private String tipoEndereco;
	private String pontoReferencia;
	private String observacao;
	@JsonIgnore
	@OneToMany(mappedBy = "cadastro", fetch = FetchType.EAGER)
	private List<Agendamento> agendamentos;
	
	
	
	public List<Agendamento> getAgendamentos() {
		return agendamentos;
	}


	public void setAgendamentos(List<Agendamento> agendamentos) {
		this.agendamentos = agendamentos;
	}



	
	
	
}