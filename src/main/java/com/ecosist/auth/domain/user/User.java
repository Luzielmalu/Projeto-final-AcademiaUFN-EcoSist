package com.ecosist.auth.domain.user;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.ecosist.auth.domain.coleta.Agendamento;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
@Entity(name = "users")
@Table(name = "users")
@EqualsAndHashCode(of = "id")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String login;
    private String password;
    @Enumerated(EnumType.STRING)
    private UserRole role;
    @JsonIgnore
	//@OneToMany(mappedBy = "user", fetch= FetchType.EAGER) 
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Agendamento> agendamentos;
    
    //@JsonIgnore
	//@OneToMany(mappedBy = "user", fetch= FetchType.EAGER) 
	//private List<Cadastro> cadastro = new ArrayList<>();= new ArrayList<>();

    

    public User() {
    	
    }
    public User(Long id, String nome, String login, String password, UserRole role){
    	this.id = id;
    	this.nome = nome;       
    	this.login = login;
        this.password = password;
        this.role = role;
         
        }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(this.role == UserRole.ADMIN) 
        	return List.of(new SimpleGrantedAuthority("ROLE_ADMIN"), 
        			new SimpleGrantedAuthority("ROLE_USER"));
        else return List.of(new SimpleGrantedAuthority("ROLE_USER"));
    }


    	
	@Override
    public String getUsername() {
        return login;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

	@Override
	public String getPassword() {
		return password;
	}
	

	public String getLogin() {
		return login;
	}
	
	public UserRole getRole() {
		return role;
	}
	
	public void setLogin(String login) {
		this.login = login;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setRole(UserRole role) {
		this.role = role;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public List<Agendamento> getAgendamentos() {
		return agendamentos;
	}
	
	
	
	
}
