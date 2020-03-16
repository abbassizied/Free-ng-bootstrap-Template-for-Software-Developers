import { Component, OnInit } from '@angular/core';


import { faPaperPlane, faEye } from '@fortawesome/free-solid-svg-icons'; 

  
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  faPaperPlane = faPaperPlane ;
  faEye = faEye ; 

   
  constructor() { }

  ngOnInit() {
  }

}
