package az.code.backend.models;

import lombok.*;

import javax.persistence.*;
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
    private Date createdAt;
    private String phone;

    @OneToMany(cascade = CascadeType.ALL,mappedBy = "mUser",fetch = FetchType.EAGER)
    private List<Role> roles;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "mUser")
    private List<Subscribe> subscribes;
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "mUser")
    private List<Card> cards;
}

