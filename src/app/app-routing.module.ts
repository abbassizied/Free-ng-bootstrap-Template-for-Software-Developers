import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component'; 
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { ResumeComponent } from './resume/resume.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './project/project.component';
import { BlogHomeAltComponent } from './blog-home-alt/blog-home-alt.component';
import { BlogPostComponent } from './blog-post/blog-post.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent  }, 
  { path: 'contact', component: ContactComponent }, 
  { path: 'resume', component: ResumeComponent },    
  { path: 'blog-home', component: BlogHomeComponent }, 
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'project', component: ProjectComponent },  
  { path: 'blog-home-alt', component: BlogHomeAltComponent }, 
  { path: 'blog-post', component: BlogPostComponent }, 
  { path: 'services', component: ServicesComponent },   
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
