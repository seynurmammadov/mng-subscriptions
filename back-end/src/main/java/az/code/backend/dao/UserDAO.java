package az.code.backend.dao;

import az.code.backend.models.mUser;

public interface UserDAO {
    void save(mUser user);
    mUser get(String email);
}
