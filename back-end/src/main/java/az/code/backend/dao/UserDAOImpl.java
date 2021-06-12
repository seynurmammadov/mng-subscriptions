package az.code.backend.dao;

import az.code.backend.models.mUser;
import az.code.backend.repositories.mUserRepository;
import org.springframework.stereotype.Component;

@Component
public class UserDAOImpl implements UserDAO{
    mUserRepository userRepository;

    public UserDAOImpl(mUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void save(mUser user) {
        userRepository.save(user);
    }

    @Override
    public mUser get(String email) {
        return userRepository.findByEmail(email);
    }
}
