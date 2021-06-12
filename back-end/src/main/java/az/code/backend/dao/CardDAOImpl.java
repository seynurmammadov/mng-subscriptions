package az.code.backend.dao;

import az.code.backend.models.Card;
import az.code.backend.models.Subscribe;
import az.code.backend.models.mUser;
import az.code.backend.repositories.CardRepository;
import az.code.backend.repositories.SubscribeRepository;
import az.code.backend.repositories.mUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class CardDAOImpl implements CardDAO{
    mUserRepository userRepository;
    CardRepository cardRepository;

    @Autowired
    public CardDAOImpl(CardRepository cardRepository, mUserRepository userRepository) {
        this.cardRepository = cardRepository;
        this.userRepository = userRepository;
    }
    @Override
    public void save(String email, Card card) {
        mUser user= userRepository.findByEmail(email);
        user.getCards().add(card);
        userRepository.save(user);
    }

    @Override
    public Card delete(String email, long id) {
        Card card =getById(email,id);
        mUser user= userRepository.findByEmail(email);
        user.getCards().remove(card);
        userRepository.save(user);
        return card;
    }

    @Override
    public Card getById(String email, long id) {
        mUser user= userRepository.findByEmail(email);
        return user.getCards().stream().filter(c->c.getId()==id).findFirst().get();
    }

    @Override
    public List<Card> getAll(String email) {
        mUser user= userRepository.findByEmail(email);
        return user.getCards();
    }
}
