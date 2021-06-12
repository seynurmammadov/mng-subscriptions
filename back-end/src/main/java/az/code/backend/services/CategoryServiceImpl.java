package az.code.backend.services;

import az.code.backend.dao.CardDAO;
import az.code.backend.dao.CateogoryDAO;
import az.code.backend.models.Category;
import az.code.backend.models.dto.CategoryDTO;
import az.code.backend.models.dto.MapStructMapper;
import az.code.backend.services.interfaces.CategoryService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    final
    CateogoryDAO cateogoryDAO;
    final
    MapStructMapper mapStructMapper;

    public CategoryServiceImpl( CateogoryDAO cateogoryDAO, MapStructMapper mapStructMapper) {
        this.cateogoryDAO = cateogoryDAO;
        this.mapStructMapper = mapStructMapper;
    }
    @Override
    public List<CategoryDTO> getAll() {
        return mapStructMapper.catsToCatDTOs(cateogoryDAO.getAll());
    }
}
