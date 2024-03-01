package com.jobsportal.Jobs.filter;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.jobsportal.Jobs.service.impl.JwtService;
import com.jobsportal.Jobs.service.impl.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

	@Autowired
	private JwtService jwtService;

	@Autowired
	private UserService userDetailsService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String authHeader = request.getHeader("Authorization");
		String token = null;
		String username = null;
		if (authHeader != null && authHeader.startsWith("Bearer ")) {
			token = authHeader.substring(7);
			username = jwtService.extractUsername(token);
		}

		if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = userDetailsService.loadUserByUsername(username);
			if (jwtService.validateToken(token, userDetails)) {
				UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails,
						null, userDetails.getAuthorities());
				authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authToken);
			} else {
				// Handle invalid token
				// Send 401 Unauthorized response and clear the SecurityContextHolder
				response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
				response.getWriter().write("Invalid token");
				response.getWriter().flush();
				SecurityContextHolder.clearContext();
				return; // Don't continue the filter chain
			}
		}
		filterChain.doFilter(request, response);
	}

//	private void handleAuthenticationFailure(HttpServletRequest request, HttpServletResponse response)
//			throws IOException {
//		// You can customize the behavior on authentication failure, for example,
//		// returning an error response
//		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//		response.setContentType("application/json");
//		response.getWriter().write("{\"error\": \"Unauthorized\"}");
//	}

}
