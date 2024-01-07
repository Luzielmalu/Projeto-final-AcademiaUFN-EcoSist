package com.ecosist.auth.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.ecosist.auth.domain.user.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    UserDetails findByLogin(String login);

	Optional<User> findById(User user);

	boolean existsByLogin(String login);


}
