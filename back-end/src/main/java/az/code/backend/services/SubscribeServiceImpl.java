package az.code.backend.services;

import az.code.backend.dao.SubscribeDAO;
import az.code.backend.models.Subscribe;

import java.util.Date;

public class SubscribeServiceImpl implements SubscribeService {
    SubscribeDAO subscribeDAO;
    @Override
    public void addSubscription(Subscribe subscribe) {
        subscribeDAO.addSubscription(subscribe);
    }

    @Override
    public void deleteSubscription(long id) {
        subscribeDAO.deleteSubscription(id);
    }

    @Override
    public void unSubscribe(long id) {
        subscribeDAO.unSubscribe(id);
    }
    @Override
    public void subscribe(long id) {
        subscribeDAO.subscribe(id);
    }

    @Override
    public void updateName(long id, String name) {
        subscribeDAO.updateName(id,name);
    }

    @Override
    public void updateFee(long id, double fee) {
        subscribeDAO.updateFee(id, fee);
    }

    @Override
    public void updateCreatedDate(long id, Date createdDate) {
        subscribeDAO.updateCreatedDate(id,createdDate);
    }

    @Override
    public void updateNextPaymentDate(long id, Date nextPaymentDate) {
        subscribeDAO.updateNextPaymentDate(id, nextPaymentDate);
    }
}
