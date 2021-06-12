package az.code.backend.dao;

import az.code.backend.models.Card;
import az.code.backend.models.Subscribe;

import java.util.List;

public interface CardDAO {
    void save(String email, Card card);
    Card delete(String email,long id);
    Card getById(String email,long id);
    List<Card> getAll(String email);
}
