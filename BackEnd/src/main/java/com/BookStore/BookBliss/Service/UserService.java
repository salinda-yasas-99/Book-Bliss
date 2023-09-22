package com.BookStore.BookBliss.Service;


import com.BookStore.BookBliss.DTO.CategoryDTO;
import com.BookStore.BookBliss.DTO.UserResponseDTO;
import com.BookStore.BookBliss.Entity.Category;
import com.BookStore.BookBliss.Entity.User;
import com.BookStore.BookBliss.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

        private final UserRepository userRepository;

        public UserResponseDTO getUserDetails(String username) {

            User user = userRepository.findByEmail(username)
                    .orElseThrow(() -> new IllegalArgumentException("User not found."));

            return convertToDTO(user);
    }

    private UserResponseDTO convertToDTO(User user){
        UserResponseDTO userResponseDTO= new UserResponseDTO();
        userResponseDTO.setEmail(user.getEmail());
        userResponseDTO.setFirstName(user.getFirstName());
        userResponseDTO.setLastName(user.getLastName());
        return userResponseDTO;
    }
}
