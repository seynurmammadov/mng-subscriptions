package az.code.backend.services.interfaces;

import az.code.backend.models.Card;
import az.code.backend.models.Pagination;
import az.code.backend.models.dto.CardDTO;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

public interface CardService {
    void save(String email, Card card);
    CardDTO delete(String email, long id);

    CardDTO getById(String email, long id);
    Pagination<CardDTO> getAll(String email, HttpServletRequest request, Integer count, Integer page);
}
