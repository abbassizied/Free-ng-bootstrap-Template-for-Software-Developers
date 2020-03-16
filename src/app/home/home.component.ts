import { Component, OnInit } from '@angular/core'; 
import { OwlOptions } from 'ngx-owl-carousel-o';



import { faArrowAltCircleRight, faFileAlt, faQuoteLeft, faEye } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faAngular, faReact, faVuejs, faNodeJs, faPython, faPhp, faNpm, faGrunt, faGulp, faHtml5, faCss3Alt, faSass, faLess } from '@fortawesome/free-brands-svg-icons'; 

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {
  
  faArrowAltCircleRight = faArrowAltCircleRight ;
  faFileAlt = faFileAlt ;
  faQuoteLeft = faQuoteLeft ;
  faEye = faEye ;
  faJsSquare = faJsSquare ;
  faAngular = faAngular ;
  faReact = faReact ;
  faVuejs = faVuejs ;
  faNodeJs = faNodeJs ;
  faPython = faPython ;
  faPhp = faPhp ;
  faGulp = faGulp ;
  faCss3Alt = faCss3Alt ;
  faLess = faLess ;
  faNpm = faNpm;  
  faGrunt = faGrunt ;
  faHtml5 = faHtml5;
  faSass = faSass ;
  
  customOptions: OwlOptions = {
        margin:30,
        nav:false,
        responsive:{
	        0:{
	            items:1,
	        },
	        768:{
	            items:2,
	        },
	        1200: {
		        items:3,
	        }
	    }
  }
  
  constructor() { }

  ngOnInit() {
  }

  
  
  
}
