package com.ecosist.auth.services;

public class CadastroNotFoundException extends RuntimeException{
	public CadastroNotFoundException(Long id) {
        super("Cadastro não encontrado com ID: " + id);
    }

}
