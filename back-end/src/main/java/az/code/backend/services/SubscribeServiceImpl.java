package az.code.backend.services;

import az.code.backend.dao.SubscribeDAO;
import az.code.backend.models.Pagination;
import az.code.backend.models.Subscribe;
import az.code.backend.models.dto.MapStructMapper;
import az.code.backend.models.dto.SubscribeDTO;
import az.code.backend.services.interfaces.SubscribeService;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
@Service
public class SubscribeServiceImpl implements SubscribeService {
    final
    SubscribeDAO subscribeDAO;
    final
    MapStructMapper mapStructMapper;

    public SubscribeServiceImpl(MapStructMapper mapStructMapper, SubscribeDAO subscribeDAO) {
        this.mapStructMapper = mapStructMapper;
        this.subscribeDAO = subscribeDAO;
    }

    @Override
    public void save(String email,Subscribe subscribe) {
        subscribe.setNextPaymentDate(subscribe.getCreatedDate().plusMonths(1));
        subscribeDAO.save( email,subscribe);
    }

    @Override
    public SubscribeDTO delete(String email, long id) {
        return mapStructMapper.subToSubDTO(subscribeDAO.delete(email,id));
    }

    @Override
    public void unSubscribe(String email,long id) {
        subscribeDAO.unSubscribe(email,id);
    }
    @Override
    public void subscribe(String email,long id) {
        subscribeDAO.subscribe(email,id);
    }

    @Override
    public SubscribeDTO getById(String email,long id) {
        return mapStructMapper.subToSubDTO(subscribeDAO.getById(email,id));
    }

    @Override
    public Pagination<SubscribeDTO> getByCardId(String email, long card_id, HttpServletRequest request, Integer count, Integer page) {
        return new Pagination<>(request, count, page,mapStructMapper.subsToSubDTOs(subscribeDAO.getByCardId(email,card_id)));
    }
    @Override
    public Pagination<SubscribeDTO>  getAll(String email, HttpServletRequest request, Integer count, Integer page) {
        return new Pagination<>(request, count, page,mapStructMapper.subsToSubDTOs(subscribeDAO.getAll(email)));
    }
}
