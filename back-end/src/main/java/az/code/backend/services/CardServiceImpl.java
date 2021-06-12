package az.code.backend.services;

import az.code.backend.dao.CardDAO;
import az.code.backend.dao.SubscribeDAO;
import az.code.backend.models.Card;
import az.code.backend.models.Pagination;
import az.code.backend.models.dto.CardDTO;
import az.code.backend.models.dto.MapStructMapper;
import az.code.backend.services.interfaces.CardService;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
@Service
public class CardServiceImpl implements CardService {
    final
    CardDAO cardDAO;
    final
    MapStructMapper mapStructMapper;

    public CardServiceImpl(MapStructMapper mapStructMapper, CardDAO cardDAO) {
        this.mapStructMapper = mapStructMapper;
        this.cardDAO = cardDAO;
    }
    @Override
    public void save(String email, Card card) {
        cardDAO.save( email,card);
    }

    @Override
    public CardDTO delete(String email, long id) {
        return mapStructMapper.cardToCardDTO(cardDAO.delete(email,id));
    }

    @Override
    public CardDTO getById(String email, long id) {
        return mapStructMapper.cardToCardDTO(cardDAO.getById(email,id));
    }

    @Override
    public Pagination<CardDTO> getAll(String email, HttpServletRequest request, Integer count, Integer page) {
        return new Pagination<>(request, count, page,mapStructMapper.cardsToCardDTOs(cardDAO.getAll(email)));

    }
}
