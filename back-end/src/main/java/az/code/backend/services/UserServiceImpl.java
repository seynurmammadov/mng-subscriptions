package az.code.backend.services;

import az.code.backend.dao.UserDAO;
import az.code.backend.models.dto.MapStructMapper;
import az.code.backend.models.dto.UserDTO;
import az.code.backend.models.mUser;
import az.code.backend.services.interfaces.UserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {
    final
    UserDAO userDAO;
    final
    PasswordEncoder passwordEncoder;

    final
    MapStructMapper mapStructMapper;

    public UserServiceImpl(MapStructMapper mapStructMapper,UserDAO userDAO, PasswordEncoder passwordEncoder) {
        this.userDAO = userDAO;
        this.mapStructMapper = mapStructMapper;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void save(mUser user) {
        user.setRole("USER");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userDAO.save(user);
    }

    @Override
    public UserDTO get(String email) {
        return mapStructMapper.userToUserDTO(userDAO.get(email));
    }
}
