package com.ecosist.auth.domain.coleta;





import java.util.HashMap;
import java.util.Map;
import com.ecosist.auth.domain.user.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
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
	private String nome;
	private String data;
	private String horario;
	private String cpfCnpj;
	private String enderecoColeta;
	private String quantOleo;
	private String statusColeta;
	
	@ManyToOne
    @JoinColumn(name = "cadastro_id")
    private Cadastro cadastro;
	
	@ManyToOne
    @JoinColumn(name = "user_id")
	private User user;

	//para retornar do banco de dados os ids de cadastro e user
	@JsonProperty("cadastro_id")
    public Long getCadastroId() {
        return (cadastro != null) ? cadastro.getId() : null;
    }

    @JsonProperty("user_id")
    public Long getUserId() {
        return (user != null) ? user.getId() : null;
    }

    public Map<String, Object> toJSON() {
        Map<String, Object> json = new HashMap<>();
        json.put("id", getId());
        json.put("nome", getNome());
        json.put("data", getData());
        json.put("horario", getHorario());
        json.put("cpfCnpj", getCpfCnpj());
        json.put("enderecoColeta", getEnderecoColeta());
        json.put("quantOleo", getQuantOleo());
        json.put("statusColeta", getStatusColeta());
        json.put("cadastro_id", getCadastroId());
        json.put("user_id", getUserId());
        return json;
    }
		
	
	
}
	