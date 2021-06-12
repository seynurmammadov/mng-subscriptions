package az.code.backend.models;

import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cards")
public class    Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private long cardNumber;
    private String expValidation;
    private int CVV;
    private long balance;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "card")
    private List<Subscribe> subscribes;
    @ManyToOne
    @JoinColumn(name = "mUser_id")
    private mUser mUser;
}
