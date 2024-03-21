package com.jobsportal.Jobs.respository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jobsportal.Jobs.entity.User;

@Repository
@EnableJpaRepositories
public interface UserRepository extends MongoRepository<User, Integer> {
	Optional<User> findByName(String username);
}