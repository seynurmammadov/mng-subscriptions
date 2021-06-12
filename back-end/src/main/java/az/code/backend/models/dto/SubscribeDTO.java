package az.code.backend.models.dto;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SubscribeDTO {
    private long id;
    private String name;
    private double fee;
    private LocalDateTime createdDate;
    private LocalDateTime nextPaymentDate;
    private boolean isSubscribed;
    private CategoryDTO category;
}
