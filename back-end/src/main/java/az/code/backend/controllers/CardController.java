package az.code.backend.controllers;

import az.code.backend.configs.jwt.JwtTokenUtil;
import az.code.backend.models.Card;
import az.code.backend.models.Pagination;
import az.code.backend.models.Subscribe;
import az.code.backend.models.dto.CardDTO;
import az.code.backend.models.dto.SubscribeDTO;
import az.code.backend.services.interfaces.CardService;
import az.code.backend.services.interfaces.SubscribeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/cards")
public class CardController {
    final
    CardService cardService;
    final
    JwtTokenUtil jwtTokenUtil;

    public CardController(JwtTokenUtil jwtTokenUtil, CardService cardService) {
        this.jwtTokenUtil = jwtTokenUtil;
        this.cardService = cardService;
    }

    @GetMapping
    public ResponseEntity<Pagination<CardDTO>> getAll(HttpServletRequest request,
                                                      @RequestParam(required = false) Integer count,
                                                      @RequestParam(required = false) Integer page) {

        return new ResponseEntity<>(cardService.getAll(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),request, count, page), HttpStatus.OK);
    }

    @GetMapping("/{card_id}")
    public ResponseEntity<CardDTO> getById(@PathVariable long card_id, HttpServletRequest request) {
        return new ResponseEntity<>(cardService.getById(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),card_id), HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity save(HttpServletRequest request,@RequestBody Card card) {
        cardService.save(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),card);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }
    @PutMapping
    public ResponseEntity update(HttpServletRequest request,@RequestBody Card card) {
        cardService.save(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),card);
        return new ResponseEntity<>( HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(HttpServletRequest request,@PathVariable long id){
        cardService.delete(jwtTokenUtil.getUsernameFromToken(request.getHeader("Authorization")),id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
}
