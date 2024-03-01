package com.jobsportal.Jobs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.jobsportal.Jobs.entity.User;
import com.jobsportal.Jobs.respository.UserRepository;

import java.util.Optional;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	@Autowired
	private PasswordEncoder encoder;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		Optional<User> userDetail = repository.findByName(username);

		// Converting userDetail to UserDetails
		return userDetail.map(UserInfoDetails::new)
				.orElseThrow(() -> new UsernameNotFoundException("User not found " + username));
	}

	public String addUser(User userInfo) {
		userInfo.setPassword(encoder.encode(userInfo.getPassword()));
		repository.save(userInfo);
		return "User Added Successfully";
	}
}
