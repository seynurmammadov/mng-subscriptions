package az.code.backend.repositories;

import az.code.backend.models.Card;
import az.code.backend.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
