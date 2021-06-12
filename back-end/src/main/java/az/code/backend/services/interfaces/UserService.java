package az.code.backend.services.interfaces;

import az.code.backend.models.dto.UserDTO;
import az.code.backend.models.mUser;

public interface UserService {
    void save(mUser user);
    UserDTO get(String email);
}
