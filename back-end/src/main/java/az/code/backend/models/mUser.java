package az.code.backend.models;

import az.code.backend.validators.ValidPhoneNumber;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class mUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    @NotNull(message = "Filed could not be null")
    @Email(message = "Email should be valid")
    private String email;

    @Min(value = 8,message = "Password shouldn't be less than 8 symbols")
    private String password;
    @NotNull(message = "Filed could not be null")
    private String name;
    @NotNull(message = "Filed could not be null")
    private String surname;
    private Date createdAt=new Date();
    @NotNull(message = "Field could not be null")
    @ValidPhoneNumber
    private String phone;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "mUser",fetch = FetchType.EAGER)
    private List<Role> roles = new ArrayList<>();
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "mUser")
    private List<Subscribe> subscribes;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "mUser")
    private List<Card> cards;
    public void setRole(String name){
       this.roles.add(Role.builder().name(name).build());
    }
}

