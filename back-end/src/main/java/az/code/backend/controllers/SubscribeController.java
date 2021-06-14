package az.code.backend.controllers;

import az.code.backend.configs.jwt.JwtTokenUtil;
import az.code.backend.models.Pagination;
import az.code.backend.models.Subscribe;
import az.code.backend.models.dto.SubscribeDTO;
import az.code.backend.services.interfaces.SubscribeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/subscribes")
@CrossOrigin
public class SubscribeController {
    final
    SubscribeService subscribeService;
    final
    JwtTokenUtil jwtTokenUtil;

    public SubscribeController(JwtTokenUtil jwtTokenUtil, SubscribeService subscribeService) {
        this.jwtTokenUtil = jwtTokenUtil;
        this.subscribeService = subscribeService;
    }

    @GetMapping
    public ResponseEntity<Pagination<SubscribeDTO>> getAll(HttpServletRequest request,
                                                           @RequestParam(required = false) Integer count,
                                                           @RequestParam(required = false) Integer page) {

        return new ResponseEntity<>(subscribeService.getAll(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),request, count, page), HttpStatus.OK);
    }

    @GetMapping("/card/{card_id}")
    public ResponseEntity<Pagination<SubscribeDTO>> getByCardId(@PathVariable long card_id, HttpServletRequest request,
                                                                @RequestParam(required = false) Integer count,
                                                                @RequestParam(required = false) Integer page) {
        return new ResponseEntity<>(subscribeService.getByCardId(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),card_id,request, count, page), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SubscribeDTO> getByCardId(HttpServletRequest request,@PathVariable long id) {
        return new ResponseEntity<>(subscribeService.getById(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity save(HttpServletRequest request,@RequestBody Subscribe subscribe) {
        subscribeService.save(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),subscribe);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity update(HttpServletRequest request,@RequestBody Subscribe subscribe,@PathVariable long id) {
        subscribeService.update(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),subscribe,id);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }
    @PutMapping("/subscribe/{id}")
    public ResponseEntity subscribe(HttpServletRequest request,@PathVariable long id){
        subscribeService.subscribe(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),id);
        return new ResponseEntity<>( HttpStatus.OK);
    }

    @PutMapping("/unSubscribe/{id}")
    public ResponseEntity unSubscribe(HttpServletRequest request,@PathVariable long id){
        subscribeService.unSubscribe(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity delete(HttpServletRequest request,@PathVariable long id){
        subscribeService.delete(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
}
