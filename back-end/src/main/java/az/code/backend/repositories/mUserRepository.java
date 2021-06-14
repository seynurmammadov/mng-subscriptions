package az.code.backend.repositories;

import az.code.backend.models.mUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface mUserRepository extends JpaRepository<mUser, Long> {
    mUser findByEmail(String email);

    @Modifying
    @Query(value = "Delete from subscribes s where s.id=:id", nativeQuery = true)
    void deleteSubscriber(Long id);
}