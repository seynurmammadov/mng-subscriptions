package az.code.backend.services.interfaces;

import az.code.backend.models.Subscribe;

import java.util.Date;

public interface SubscribeService {
    void addSubscription(Subscribe subscribe);
    void deleteSubscription(long id);
    void unSubscribe(long id);
    void subscribe(long id);
    void updateName(long id,String name);
    void updateFee(long id,double fee);
    void updateCreatedDate(long id, Date createdDate);
    void updateNextPaymentDate(long id,Date nextPaymentDate);
}
