package az.code.backend.controllers;

import az.code.backend.configs.jwt.JwtTokenUtil;
import az.code.backend.models.Pagination;
import az.code.backend.models.dto.CategoryDTO;
import az.code.backend.models.dto.SubscribeDTO;
import az.code.backend.services.interfaces.CategoryService;
import az.code.backend.services.interfaces.SubscribeService;
import jdk.jfr.Category;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("api/categories")
public class CategoryController {
    final
    CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public ResponseEntity<List<CategoryDTO>> getAll() {

        return new ResponseEntity<>(categoryService.getAll(), HttpStatus.OK);
    }

}
