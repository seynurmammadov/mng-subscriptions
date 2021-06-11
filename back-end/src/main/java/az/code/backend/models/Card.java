package az.code.backend.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.List;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cards")
public class Card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull(message = "Filed could not be null")
    private String name;
    @Digits(integer = 16, fraction = 0,message = "Enter Card Number properly")
    private long cardNumber;
    @NotNull(message = "Field could not be null")

    private String expValidation;
    @NotNull(message = "Filed could not be null")
    @Digits(integer = 3,fraction = 0)
    private int CVV;
    @PositiveOrZero(message = "Balance shouldn't be negative")
    @Digits(integer = 999999,fraction = 2)
    private double balance;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "card")
    private List<Subscribe> subscribes;
    @ManyToOne
    @JoinColumn(name = "mUser_id")
    private mUser mUser;
}
