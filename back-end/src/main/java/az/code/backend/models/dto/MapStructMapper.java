package az.code.backend.models.dto;

import az.code.backend.models.Card;
import az.code.backend.models.Category;
import az.code.backend.models.Subscribe;
import az.code.backend.models.mUser;

import java.util.List;

public interface MapStructMapper {
    SubscribeDTO subToSubDTO(Subscribe subscribe);
    List<SubscribeDTO> subsToSubDTOs(List<Subscribe> subscribes);
    CategoryDTO catToCatDTO(Category category);
    UserDTO userToUserDTO(mUser user);
    CardDTO cardToCardDTO(Card card);
    List<CardDTO> cardsToCardDTOs(List<Card> cards);
    List<CategoryDTO> catsToCatDTOs(List<Category> categories);

}
