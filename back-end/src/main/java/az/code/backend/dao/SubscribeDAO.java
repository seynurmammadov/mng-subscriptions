package az.code.backend.dao;

import az.code.backend.models.Subscribe;

import java.util.Date;
import java.util.List;

public interface SubscribeDAO {
    void save(String email,Subscribe subscribe);
    Subscribe delete(String email,long id);
    void unSubscribe(String email,long id);
    void subscribe(String email,long id);
    Subscribe getById(String email,long id);
    List<Subscribe> getByCardId(String email, long card_id);
    List<Subscribe> getAll(String email);
}
