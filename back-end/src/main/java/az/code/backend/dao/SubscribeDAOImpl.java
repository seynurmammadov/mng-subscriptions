package az.code.backend.dao;

import az.code.backend.models.Subscribe;
import az.code.backend.repositories.SubscribeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component

public class SubscribeDAOImpl implements SubscribeDAO {
    SubscribeRepository subscribeRepository;

    public SubscribeDAOImpl(SubscribeRepository subscribeRepository) {
        this.subscribeRepository = subscribeRepository;
    }

    @Override
    public void addSubscription(Subscribe subscribe) {
        subscribeRepository.save(subscribe);
    }

    @Override
    public void deleteSubscription(long id) {
        subscribeRepository.deleteById(id);
    }

    @Override
    public void unSubscribe(long id) {
        subscribeRepository.unSubscribe(id);
    }
    public void subscribe(long id){
        subscribeRepository.subscribe(id);
    }

    @Override
    public void updateName(long id, String name) {
        subscribeRepository.updateName(id,name);
    }

    @Override
    public void updateFee(long id, double fee) {
        subscribeRepository.updateFee(id,fee);
    }

    @Override
    public void updateCreatedDate(long id, Date createdDate) {
        subscribeRepository.updateCreatedDate(id,createdDate);
    }

    @Override
    public void updateNextPaymentDate(long id, Date nextPaymentDate) {
        subscribeRepository.updateNextPaymentDate(id, nextPaymentDate);
    }
}
