package az.code.backend.services.interfaces;

public interface MailService {
    void sendMail(String mail,String subject, String text);
}
