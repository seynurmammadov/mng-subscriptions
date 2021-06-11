package az.code.backend.repositories;

import az.code.backend.models.Subscribe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

public interface SubscribeRepository extends JpaRepository<Subscribe,Long> {
        @Query("UPDATE Subscribe s set s.isSubscribed = false where s.id = :id")
        void unSubscribe(Long id);
        @Query("UPDATE Subscribe s set s.isSubscribed = true where s.id = :id")
        void subscribe(Long id);
        List<Subscribe> getSubscribesByCardId(long id);
}
