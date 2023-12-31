package com.BookStore.BookBliss.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.ZonedDateTime;

@RestControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(value = {EmailAlreadyExistException.class})
    public ResponseEntity<Object> handleEmailNotFoundException(
            EmailAlreadyExistException exception
    ){
        HttpStatus httpStatus =HttpStatus.CONFLICT;
        CustomException customException = new CustomException(
                exception.getMessage(),
                httpStatus,
                ZonedDateTime.now());
    return new ResponseEntity<>(customException,httpStatus);
    }

    @ExceptionHandler(value = {EmailOrPasswordIncorrectException.class})
    public ResponseEntity<Object> handleEmailOrPasswordIncorrectException(
            EmailOrPasswordIncorrectException exception
    ){
        HttpStatus httpStatus =HttpStatus.FORBIDDEN;
        CustomException customException = new CustomException(
                exception.getMessage(),
                httpStatus,
                ZonedDateTime.now());
        return new ResponseEntity<>(customException,httpStatus);
    }

    @ExceptionHandler(value = {BookAlreadyExistException.class})
    public ResponseEntity<Object> handleBookAlreadyExistException(
            BookAlreadyExistException exception
    ){
        HttpStatus httpStatus =HttpStatus.CONFLICT;
        CustomException customException = new CustomException(
                exception.getMessage(),
                httpStatus,
                ZonedDateTime.now());
        return new ResponseEntity<>(customException,httpStatus);
    }

    @ExceptionHandler(value = {CategoryAlreadyExistsException.class})
    public ResponseEntity<Object> handleCategoryAlreadyExistException(
            CategoryAlreadyExistsException exception
    ){
        HttpStatus httpStatus =HttpStatus.CONFLICT;
        CustomException customException = new CustomException(
                exception.getMessage(),
                httpStatus,
                ZonedDateTime.now());
        return new ResponseEntity<>(customException,httpStatus);
    }





}
