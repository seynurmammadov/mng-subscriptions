package az.code.backend.validators;

import az.code.backend.models.Subscribe;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

public class SubscribeValidator implements Validator {
    @Override
    public boolean supports(Class clazz) {
        return Subscribe.class.equals(clazz);
    }

    @Override
    public void validate(Object o, Errors e) {
        ValidationUtils.rejectIfEmptyOrWhitespace(e,"name","name.empty");
        Subscribe subscribe = (Subscribe) o;
        if(subscribe.getFee()<0) e.rejectValue("fee","fee.negative.value");
    }
}
