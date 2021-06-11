package az.code.backend.repositories;

import az.code.backend.models.Subscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;

public interface SubscribeRepository extends JpaRepository<Subscribe,Long> {
        @Modifying
        @Query("UPDATE Subscribe s set s.isSubscribed = false where s.id = ?1")
        void unSubscribe(Long id);
        @Modifying
        @Query("UPDATE Subscribe s set s.isSubscribed = true where s.id = ?1")
        void subscribe(Long id);
        @Modifying
        @Query("UPDATE Subscribe s set s.name = ?2 where s.id = ?1")
        void updateName(Long id,String name);
        @Modifying
        @Query("UPDATE Subscribe s set s.fee = ?2 where s.id = ?1")
        void updateFee(long id,double fee);
        @Modifying
        @Query("UPDATE Subscribe s set s.createdDate = ?2 where s.id = ?1")
        void updateCreatedDate(long id, Date createdDate);
        @Modifying
        @Query("UPDATE Subscribe s set s.nextPaymentDate = ?2 where s.id = ?1")
        void updateNextPaymentDate(long id,Date nextPaymentDate);
}
