package az.code.backend.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
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
    private String email;
    private String password;
    private String name;
    private String surname;
    private LocalDateTime createdAt=LocalDateTime.now();
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

