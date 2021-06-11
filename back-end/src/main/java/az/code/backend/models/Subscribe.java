package az.code.backend.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.lang.NonNull;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "subscribes")
public class Subscribe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull(message = "Filed could not be null")
    private String name;
    @NotNull(message = "Filed could not be null")
    @PositiveOrZero(message = "monthlyFee couldn't be negative")
    private double fee;
    @PastOrPresent
    private Date createdDate;
    @FutureOrPresent
    private Date nextPaymentDate;
    private boolean isSubscribed=true;
    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;
    @ManyToOne
    @JoinColumn(name = "mUser_id")
    private mUser mUser;
    @ManyToOne
    @JoinColumn(name = "card_id")
    private Card card;

    public Subscribe(String name, double fee, Date createdDate, Date nextPaymentDate, boolean isSubscribed, Category category, az.code.backend.models.mUser mUser, Card card) {
        this.name = name;
        this.fee = fee;
        this.createdDate = createdDate;
        this.nextPaymentDate = nextPaymentDate;
        this.isSubscribed = isSubscribed;
        this.category = category;
        this.mUser = mUser;
        this.card = card;
    }


}
