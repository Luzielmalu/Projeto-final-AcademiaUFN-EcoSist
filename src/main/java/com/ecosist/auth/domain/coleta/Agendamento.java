package com.ecosist.auth.domain.coleta;





import com.ecosist.auth.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Table(name = "agendamentos")
@JsonIgnoreProperties({"user", "cadastro"})
public class Agendamento {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	private String data;
	private String horario;
	private String cpfCnpj;
	private String enderecoColeta;
	private String quantOleo;
	private String statusColeta;
	
	
	@ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinColumn(name = "cadastro_id")
    private Cadastro cadastro;
	
	@ManyToOne(cascade = CascadeType.PERSIST, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
	private User user;
	
	public Long getCadastro_id() {
        if (cadastro != null) {
            //return cadastro.getId();
        }
        return null; 
    }

	public Long getUser_id() {
       if (user != null) {
          return user.getId();
        }
        return null; 
   }

	
	
	
	
	
	
	
		
	
	
}
	