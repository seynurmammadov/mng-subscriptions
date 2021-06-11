package az.code.backend.models.dto;

import az.code.backend.models.Category;
import az.code.backend.models.Subscribe;

import java.util.List;

public interface MapStructMapper {
    SubscribeDTO subToSubDTO(Subscribe subscribe);
    List<SubscribeDTO> subsToSubDTOs(List<Subscribe> subscribes);
    CategoryDTO catToCatDTO(Category category);
}
