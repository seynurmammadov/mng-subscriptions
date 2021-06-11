package az.code.backend.repositories;

import az.code.backend.models.mUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface mUserRepository extends JpaRepository<mUser, Long> {
    mUser findByEmail(String email);
}