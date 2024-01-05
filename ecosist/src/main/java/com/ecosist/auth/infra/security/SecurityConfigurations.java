package com.ecosist.auth.infra.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfigurations {
    @Autowired
    SecurityFilter securityFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
    	return  httpSecurity.cors().and()
    	        .csrf(csrf -> csrf.disable())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(authorize -> authorize
                		.requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/auth/register").permitAll()
                        .requestMatchers(HttpMethod.GET, "/auth/register").permitAll()
                        .requestMatchers(HttpMethod.GET, "/auth/login").permitAll()
                        .requestMatchers(HttpMethod.GET, "/agendamento/{id}").permitAll()
                        .requestMatchers(HttpMethod.GET, "/agendamento").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/agendamento").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/agendamento/{id}/{campo}").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/agendamento/{id}").permitAll()
                        .requestMatchers(HttpMethod.POST, "/agendamento").permitAll()
                        .requestMatchers(HttpMethod.POST, "/agendamento").hasRole("USER")
                        .requestMatchers(HttpMethod.GET, "/agendamento/cpfCnpj").permitAll()
                        .requestMatchers(HttpMethod.POST, "/cadastro").permitAll()
                        .requestMatchers(HttpMethod.POST, "/cadastro").hasRole("USER")
                        .requestMatchers(HttpMethod.GET, "/cadastro/cpfCnpj").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/cadastro/{id}").permitAll()
                        .requestMatchers(HttpMethod.PUT, "/cadastro").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/cadastro/{id}/{campo}").permitAll()
                        .requestMatchers(HttpMethod.DELETE, "/cadastro").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/cadastro/{id}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/agendamento/{id}").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.GET, "/cadastro").permitAll()
                        .requestMatchers(HttpMethod.GET, "/cadastro/**").permitAll()

      
                        .anyRequest().authenticated())
                .addFilterBefore(securityFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
    

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    @Bean
    WebSecurityCustomizer webSecurityCustomizer() {
    	return (web -> web.ignoring().requestMatchers("/v3/api-docs/**", "/swagger-ui/index.html", "/swagger-ui/**"));
    }
}
