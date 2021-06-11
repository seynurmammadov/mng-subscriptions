package az.code.backend.controllers;

import az.code.backend.models.mUser;
import az.code.backend.services.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RequestMapping("api/register")
@RestController
@CrossOrigin
public class UserController {
    UserServiceImpl userService;

    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity registration(@RequestBody mUser user) {
        userService.save(user);
        return new ResponseEntity(HttpStatus.CREATED);
    }
}
