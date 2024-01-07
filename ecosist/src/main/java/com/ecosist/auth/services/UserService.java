package com.ecosist.auth.services;

import org.springframework.stereotype.Service;

import com.ecosist.auth.domain.user.User;
import com.ecosist.auth.repositories.UserRepository;

@Service
public class UserService {
	
	 private final UserRepository repository;

	    public UserService(UserRepository repository) {
	        this.repository = repository;
	    }
	    public User findById(Long id){
	       return repository.findById(id).orElseThrow(null);
	    }
		public boolean existsByLogin(String login) {
			 return repository.existsByLogin(login);
		}
}
