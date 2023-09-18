package com.BookStore.BookBliss.Exception;


public class EmailNotFoundException extends RuntimeException{

    public EmailNotFoundException(String message) {super(message);}

    public EmailNotFoundException(String message, Throwable cause) {super(message,cause);}
}
