package com.jobsportal.Jobs.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("jobs")
public class JobsController {

	@GetMapping("/home")
	public String home() {
		return "This is home page";
	}

	@GetMapping("/admin")
	@PreAuthorize("hasAuthority('ROLE_ADMIN')")
	public String admin() {
		return "This is admin page";
	}

	@GetMapping("/adminuser")
	public ResponseEntity<String> adminUser() {
		return ResponseEntity.ok("admin user");
	}

	@GetMapping("/public")
	public ResponseEntity<String> publicUser() {
		return ResponseEntity.ok("public user");
	}
}
