package az.code.backend.services;

import az.code.backend.dao.UserDAO;
import az.code.backend.models.mUser;
import az.code.backend.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {
    final
    UserDAO userDAO;
    final
    PasswordEncoder passwordEncoder;

    public UserServiceImpl(UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void save(mUser user) {

        user.setRole("USER");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userDAO.save(user);
    }
}
