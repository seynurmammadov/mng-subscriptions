package az.code.backend.repositories;

import az.code.backend.models.Card;
import az.code.backend.models.mUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card, Long> {
}
