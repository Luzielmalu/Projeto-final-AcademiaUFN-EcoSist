package com.ecosist.auth.controllers;

import com.ecosist.auth.domain.user.AuthenticationDTO;
import com.ecosist.auth.domain.user.LoginResponseDTO;
import com.ecosist.auth.domain.user.RegisterDTO;
import com.ecosist.auth.domain.user.User;
import com.ecosist.auth.infra.security.TokenService;
import com.ecosist.auth.repositories.UserRepository;
import com.ecosist.auth.services.UserService;

import jakarta.validation.Valid;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository repository;
    @Autowired
    private TokenService tokenService;
    
    @Autowired
    private UserService userService;
    
    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data){
    	LOGGER.info("Recebida a solicitação de login para o usuário: {}", data.login());
    	if (!userService.existsByLogin(data.login())) {
            LOGGER.warn("Usuário não encontrado: {}", data.login());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não encontrado");
        }
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((User) auth.getPrincipal());
    	LOGGER.info("Login com sucesso para o usuário: {}", data.login(), data);
        return ResponseEntity.ok(new LoginResponseDTO(token));
    }
    @GetMapping("/login")
    @ResponseStatus(code = HttpStatus.OK)
    public List<User> findallUser(){
        return repository.findAll();
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data){
        if(this.repository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();
        //encriptografa as senhas no banco de dados
        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.id(), data.nome(), data.login(), encryptedPassword, data.role());

        this.repository.save(newUser);
        return ResponseEntity.ok().build();
    }
    @GetMapping("/register")
    @ResponseStatus(code = HttpStatus.OK)
    public List<User> findallUser1(){
        return repository.findAll();
    }
}
