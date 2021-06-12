package az.code.backend.services;

import az.code.backend.dao.SubscribeDAO;
import az.code.backend.models.Subscribe;
import az.code.backend.services.interfaces.MailService;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ScheduledService {
    final
    SubscribeDAO subscribeDAO ;

    final
    MailService mailService;

    public ScheduledService(SubscribeDAO subscribeDAO, MailService mailService) {
        this.subscribeDAO = subscribeDAO;
        this.mailService = mailService;
    }

    @Scheduled(cron = "0 0 23 * * ?", zone = "Asia/Baku")
    public void sendMailScheduled(){
        List<Subscribe> subscribeLits = subscribeDAO.getAll();
        subscribeLits.forEach(s->{
            LocalDate today =  LocalDate.now();
            LocalDate expDate = s.getNextPaymentDate().minusDays(1);
            if(expDate.equals(today)){
                mailService.sendMail(s.getMUser().getEmail(),"Subsctiption expiring","Your subscription expiring tomorrow "+s.getNextPaymentDate().toString());
            }
            if(today.equals(s.getNextPaymentDate())){
                s.setNextPaymentDate(s.getNextPaymentDate().plusMonths(1));
                subscribeDAO.save(s);
            }
        });
    }

}
