package az.code.backend.services.interfaces;

import az.code.backend.models.Pagination;
import az.code.backend.models.Subscribe;
import az.code.backend.models.dto.SubscribeDTO;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

public interface SubscribeService{
    void save(String email,Subscribe subscribe);
    void update(String email,Subscribe subscribe,long id);
    SubscribeDTO delete(String email, long id);
    void unSubscribe(String email,long id);
    void subscribe(String email,long id);
    SubscribeDTO getById(String email,long id);
    Pagination<SubscribeDTO> getByCardId(String email, long card_id, HttpServletRequest request, Integer count, Integer page);
    Pagination<SubscribeDTO> getAll(String email, HttpServletRequest request, Integer count, Integer page);
}
