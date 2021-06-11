package az.code.backend.controllers;

import az.code.backend.models.Subscribe;
import az.code.backend.services.SubscribeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("api/subscribe")

public class SubscribeController {
    SubscribeService subscribeService;
    @PostMapping
    public ResponseEntity addSubscription(@RequestBody Subscribe subscribe){
        subscribeService.addSubscription(subscribe);
       return new ResponseEntity<>( HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity deleteSubscription(@PathVariable long id){
        subscribeService.deleteSubscription(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PutMapping("/subscribe/{id}")
    public ResponseEntity subscribe(@PathVariable long id){
        subscribeService.subscribe(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PutMapping("/unSubscribe/{id}")
    public ResponseEntity unSubscribe(@PathVariable long id){
        subscribeService.unSubscribe(id);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PutMapping("/updateName/{id}")
    public ResponseEntity updateName(@PathVariable long id,@RequestParam String name){
        subscribeService.updateName(id,name);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PutMapping("/updateFee/{id}")
    public ResponseEntity updateFee(@PathVariable long id,@RequestParam double fee){
        subscribeService.updateFee(id,fee);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PutMapping("/updateCreatedDate/{id}")
    public ResponseEntity updateCreatedDate(@PathVariable long id,@RequestParam Date createdDate){
        subscribeService.updateCreatedDate(id,createdDate);
        return new ResponseEntity<>( HttpStatus.OK);
    }
    @PutMapping("/updateNextPaymentDate/{id}")
    public ResponseEntity updateNextPaymentDate(@PathVariable long id,@RequestParam Date nextPaymentDate){
        subscribeService.updateNextPaymentDate(id,nextPaymentDate);
        return new ResponseEntity<>( HttpStatus.OK);
    }

}
