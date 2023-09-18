package com.BookStore.BookBliss.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.ZonedDateTime;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(value = {EmailNotFoundException.class})
    public ResponseEntity<Object> handleEmailNotFoundException(
            EmailNotFoundException exception
    ){
        HttpStatus httpStatus =HttpStatus.CONFLICT;
        CustomException customException = new CustomException(
                exception.getMessage(),
                httpStatus,
                ZonedDateTime.now());
    return new ResponseEntity<>(customException,httpStatus);
    }



}
