import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faLinkedin, faGithubAlt, faInstagram, faStackOverflow, faMedium, faCodepen } from '@fortawesome/free-brands-svg-icons'; 
 
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faTwitter = faTwitter ; 
  faFacebook = faFacebook ; 
  faLinkedin = faLinkedin ;  
  faGithubAlt = faGithubAlt ;  
  faInstagram = faInstagram ;  
  faStackOverflow = faStackOverflow ;  
  faMedium = faMedium ;  
  faCodepen = faCodepen ; 



  constructor() { }

  ngOnInit() {
  }

}
