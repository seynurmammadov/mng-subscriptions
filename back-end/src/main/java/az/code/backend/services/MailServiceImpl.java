package az.code.backend.services;

import az.code.backend.services.interfaces.MailService;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailServiceImpl implements MailService {
    private final JavaMailSender javaMailSender;

    public MailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public void sendMail(String mailToSend, String subject, String text) {
        SimpleMailMessage mail = new SimpleMailMessage();
        mail.setTo(mailToSend);
        mail.setFrom("exeample@gmail.com");
        mail.setSubject(subject);
        mail.setText(text);
        javaMailSender.send(mail);
    }


}
