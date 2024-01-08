package com.ecosist.auth.services;

public class AgendamentoNotFoundException extends RuntimeException{
	public AgendamentoNotFoundException(Long id) {
        super("Agendamento não encontrado com ID: " + id);
    }

}
