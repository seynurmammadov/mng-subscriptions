package az.code.backend.controllers;

import az.code.backend.configs.jwt.JwtTokenUtil;
import az.code.backend.models.dto.UserDTO;
import az.code.backend.models.mUser;
import az.code.backend.services.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RequestMapping("api/user")
@RestController
@CrossOrigin
public class UserController {
    UserServiceImpl userService;
    final
    JwtTokenUtil jwtTokenUtil;
    public UserController(UserServiceImpl userService, JwtTokenUtil jwtTokenUtil) {
        this.userService = userService;
        this.jwtTokenUtil = jwtTokenUtil;
    }


    @PostMapping("/register")
    public ResponseEntity registration(@RequestBody mUser user) {
        userService.save(user);
        return new ResponseEntity(HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<UserDTO> getUser(HttpServletRequest request) {
        return new ResponseEntity<>(userService.get(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization"))), HttpStatus.OK);
    }

}
