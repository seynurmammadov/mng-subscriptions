package az.code.backend.models.dto;

import az.code.backend.models.Subscribe;
import az.code.backend.models.mUser;
import lombok.*;

import javax.persistence.CascadeType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import java.util.List;
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CardDTO {
    private long id;
    private String name;
    private long cardNumber;
    private String expValidation;
    private int CVV;
    private long balance;
}
