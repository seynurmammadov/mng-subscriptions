package az.code.backend.models.dto;

import az.code.backend.models.Card;
import az.code.backend.models.Category;
import az.code.backend.models.Subscribe;
import az.code.backend.models.mUser;
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
        return CategoryDTO.builder().id(category.getId()).name(category.getName()).build();
    }

    @Override
    public UserDTO userToUserDTO(mUser user) {
        if (user == null) {
            return null;
        }
        return UserDTO.builder().id(user.getId()).name(user.getName()).surname(user.getSurname()).phone(user.getPhone()).build();
    }

    @Override
    public CardDTO cardToCardDTO(Card card) {
        return CardDTO.builder()
                .id(card.getId())
                .cardNumber(card.getCardNumber())
                .CVV(card.getCVV())
                .balance(card.getBalance())
                .expValidation(card.getExpValidation())
                .name(card.getName()).build();
    }

    @Override
    public List<CardDTO> cardsToCardDTOs(List<Card> cards) {
        return cards.stream().map(this::cardToCardDTO).collect(Collectors.toList());
    }

    @Override
    public List<CategoryDTO> catsToCatDTOs(List<Category> categories) {
        return categories.stream().map(this::catToCatDTO).collect(Collectors.toList());

    }
}
