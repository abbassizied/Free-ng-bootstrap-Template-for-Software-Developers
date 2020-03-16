import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component'; 
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { BlogHomeAltComponent } from './blog-home-alt/blog-home-alt.component';
import { BlogPostComponent } from './blog-post/blog-post.component'; 
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'; 
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons'; 
// import { faLinkedin, faTwitter, faGitAlt, faStackOverflow, faCodepen } from '@fortawesome/free-brands-svg-icons';

  

 
import { CarouselModule } from 'ngx-owl-carousel-o'; 
 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, 
    HomeComponent,
    NotFoundComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    BlogHomeComponent,
    ResumeComponent,
    ServicesComponent,
    PortfolioComponent,
    ProjectComponent,
    BlogHomeAltComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,     
    CarouselModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
	
constructor() { 
// library.add(fas, far, fab, faLinkedin, faTwitter, faGitAlt, faStackOverflow, faCodepen ); 
}

}
