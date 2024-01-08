package com.ecosist.auth.domain.coleta;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ecosist.auth.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
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
	//@OneToMany(mappedBy = "cadastro",  fetch= FetchType.EAGER)
	@OneToMany(mappedBy = "cadastro", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Agendamento> agendamentos = new ArrayList<>();
	

	
	
	public List<Agendamento> getAgendamentos() {
		return agendamentos;
	}


	public void setAgendamentos(List<Agendamento> agendamentos) {
		this.agendamentos = agendamentos;
	}



	
	
	
}