import { Component, OnInit } from '@angular/core';

import { faLinkedin, faTwitter, faGitAlt, faStackOverflow, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faUser, faLaptopCode, faBriefcase, faFileAlt, faBlog, faEnvelopeOpenText, faCogs, faPaperPlane } from '@fortawesome/free-solid-svg-icons'; 

  

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	 
  	faLinkedin = faLinkedin;
    faTwitter = faTwitter;
	faGitAlt = faGitAlt;
	faStackOverflow = faStackOverflow;
	faCodepen = faCodepen;	
    faUser = faUser; 
    faLaptopCode = faLaptopCode; 
    faBriefcase = faBriefcase; 
    faFileAlt = faFileAlt; 
    faBlog = faBlog; 
    faEnvelopeOpenText = faEnvelopeOpenText; 
    faCogs = faCogs; 
    faPaperPlane = faPaperPlane; 
	  
	activeId = 1 ; 
	  
    mode: boolean = true;  
	
  constructor() {}

  ngOnInit(): void {
  }
  
  
  toggleTheme(): void {
    
    if (this.mode === true) { 
      this.mode = false;
       // "dark-mode" 
    } else { 
      this.mode = true; 	  
    }  
  }
  
}
