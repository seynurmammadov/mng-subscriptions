package az.code.backend.models.dto;

import lombok.*;

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
    private Date createdDate;
    private Date nextPaymentDate;
    private boolean isSubscribed;
    private CategoryDTO category;
}
