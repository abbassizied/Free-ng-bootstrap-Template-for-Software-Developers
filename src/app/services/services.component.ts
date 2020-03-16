import { Component, OnInit } from '@angular/core';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons'; 
  
 
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  faCheck = faCheck ;
  faChevronDown = faChevronDown ;


  constructor() { }

  ngOnInit() {
  }

}
