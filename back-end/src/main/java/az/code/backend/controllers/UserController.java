package az.code.backend.controllers;

import az.code.backend.configs.jwt.JwtTokenUtil;
import az.code.backend.dao.SubscribeDAO;
import az.code.backend.models.dto.UserDTO;
import az.code.backend.models.mUser;
import az.code.backend.services.UserServiceImpl;
import az.code.backend.services.interfaces.MailService;
import org.springframework.beans.factory.annotation.Autowired;
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
    MailService mailService;



    final
    JwtTokenUtil jwtTokenUtil;
    public UserController(UserServiceImpl userService, JwtTokenUtil jwtTokenUtil, MailService mailService) {
        this.userService = userService;
        this.jwtTokenUtil = jwtTokenUtil;
        this.mailService = mailService;
    }


    @PostMapping("/register")
    public ResponseEntity registration(@RequestBody mUser user) {
        userService.save(user);
        mailService.sendMail(user.getEmail(),"WELCOME","\n" +
                "Congratulations, your user has been successfully created.");

        return new ResponseEntity(HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<UserDTO> getUser(HttpServletRequest request) {
        return new ResponseEntity<>(userService.get(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization"))), HttpStatus.OK);
    }

}
