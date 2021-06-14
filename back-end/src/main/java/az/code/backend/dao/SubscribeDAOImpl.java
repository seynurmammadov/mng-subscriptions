package az.code.backend.dao;

import az.code.backend.models.Subscribe;
import az.code.backend.models.dto.CategoryDTO;
import az.code.backend.models.mUser;
import az.code.backend.repositories.SubscribeRepository;
import az.code.backend.repositories.mUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@AllArgsConstructor
public class SubscribeDAOImpl implements SubscribeDAO {
    mUserRepository userRepository;
    SubscribeRepository subscribeRepository;

    @Autowired
    public SubscribeDAOImpl(SubscribeRepository subscribeRepository, mUserRepository userRepository) {
        this.subscribeRepository = subscribeRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void save(String email,Subscribe subscribe) {
        mUser user= userRepository.findByEmail(email);
        subscribe.setMUser(user);
        Optional<Subscribe> subscribe1 =user.getSubscribes().stream().filter(s->s.getId()==subscribe.getId()).findFirst();
         if( subscribe1.isPresent())
         {
             subscribe1.get().setCreatedDate(subscribe.getCreatedDate().plusMonths(1));
            subscribeRepository.save(subscribe);
         }else{
             user.getSubscribes().add(subscribe);
         }

        userRepository.save(user);
    }

    @Override
    public void save(Subscribe subscribe) {
        subscribeRepository.save(subscribe);
    }

    @Override
    @Transactional
    public Subscribe delete(String email,long id) {
        Subscribe subscribe =getById(email,id);
        mUser user= userRepository.findByEmail(email);
        if(user.getSubscribes().stream().filter(s->s.getId()==id).findFirst().isPresent()){
//            user.getSubscribes().remove(user.getSubscribes().stream().filter(s->s.getId()==id).findFirst().get());
      userRepository.deleteSubscriber(id);
        }userRepository.save(user);
        return subscribe;
    }

    @Override
    public void unSubscribe(String email,long id) {
        mUser user= userRepository.findByEmail(email);
        user.getSubscribes().stream().filter(s->s.getId()==id).findFirst().get().setSubscribed(false);
        userRepository.save(user);
    }
    public void subscribe(String email,long id){
        mUser user= userRepository.findByEmail(email);
        user.getSubscribes().stream().filter(s->s.getId()==id).findFirst().get().setSubscribed(true);
        userRepository.save(user);
    }

    @Override
    public Subscribe getById(String email,long id) {
        mUser user= userRepository.findByEmail(email);
        return user.getSubscribes().stream().filter(s->s.getId()==id).findFirst().get();
    }

    @Override
    public List<Subscribe> getByCardId(String email, long card_id) {
        mUser user= userRepository.findByEmail(email);
        user.getSubscribes().stream().filter(s->s.getCard().getId()==card_id).collect(Collectors.toList());
        return user.getSubscribes().stream().filter(s->s.getCard().getId()==card_id).collect(Collectors.toList());
    }

    @Override
    public List<Subscribe> getAll(String email) {
        mUser user= userRepository.findByEmail(email);
        return user.getSubscribes();
    }

    @Override
    public List<Subscribe> getAll() {
        return subscribeRepository.findAll();
    }


}
