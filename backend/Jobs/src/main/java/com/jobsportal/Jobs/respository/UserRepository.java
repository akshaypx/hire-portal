package com.jobsportal.Jobs.respository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobsportal.Jobs.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, Integer> {
	Optional<User> findByName(String username);
}