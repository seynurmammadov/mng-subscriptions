package az.code.backend.services.interfaces;

import az.code.backend.models.Category;
import az.code.backend.models.dto.CategoryDTO;

import java.util.List;

public interface CategoryService {
    List<CategoryDTO> getAll();
}
