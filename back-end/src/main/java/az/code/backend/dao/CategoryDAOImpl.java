package az.code.backend.dao;

import az.code.backend.models.Category;
import az.code.backend.repositories.CardRepository;
import az.code.backend.repositories.CategoryRepository;
import az.code.backend.repositories.mUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class CategoryDAOImpl implements CateogoryDAO{
    CategoryRepository categoryRepository;

    @Autowired
    public CategoryDAOImpl( CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    @Override
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }
}
