package com.ecosist.auth.domain.user;

public record RegisterDTO(Long id, String nome, String login, String password, UserRole role) {
}
