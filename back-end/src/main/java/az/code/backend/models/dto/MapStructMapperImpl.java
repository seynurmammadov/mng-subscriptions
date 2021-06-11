package az.code.backend.models.dto;

import az.code.backend.models.Category;
import az.code.backend.models.Subscribe;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MapStructMapperImpl implements MapStructMapper{
    @Override
    public SubscribeDTO subToSubDTO(Subscribe subscribe) {
        if (subscribe == null) {
            return null;
        }
        SubscribeDTO subscribeDTO = new SubscribeDTO();
        subscribeDTO.setId(subscribe.getId());
        subscribeDTO.setName(subscribe.getName());
        subscribeDTO.setFee(subscribe.getFee());
        subscribeDTO.setCreatedDate(subscribe.getCreatedDate());
        subscribeDTO.setNextPaymentDate(subscribe.getNextPaymentDate());
        subscribeDTO.setSubscribed(subscribe.isSubscribed());
        subscribeDTO.setCategory(catToCatDTO(subscribe.getCategory()));
        return subscribeDTO;
    }
    @Override
    public List<SubscribeDTO> subsToSubDTOs(List<Subscribe> subscribes) {
        return subscribes.stream().map(this::subToSubDTO).collect(Collectors.toList());
    }
    @Override
    public CategoryDTO catToCatDTO(Category category) {
        if (category == null) {
            return null;
        }
        CategoryDTO categoryDTO = new CategoryDTO();
        categoryDTO.setId(category.getId());
        categoryDTO.setName(category.getName());

        return categoryDTO;
    }
}
