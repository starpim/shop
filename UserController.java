package com.example.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/users")
public class UserController {
	
	@GetMapping("/password")
	public String password(Model model) {
	model.addAttribute("pageName","users/password");
	return "home";
}
	
	
	@GetMapping("/update")
	public String update(Model model) {
	model.addAttribute("pageName","users/update");
	return "home";
}
	
	@GetMapping("/login")
		public String login(Model model) {
		model.addAttribute("pageName","users/login.html");
		return "home";
	}
	
	
	@GetMapping("/mypage")
	public String mypage(Model model) {
	model.addAttribute("pageName","users/mypage");
	return "home";
}

	
	@GetMapping("/insert")
	public String insert(Model model) {
	model.addAttribute("pageName","users/insert");
	return "home";
}
	
	

}
