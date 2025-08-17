import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactUs', component: ContactUsComponent },
  {path:'home', component:HomeComponent},
  {path:'profile', component:ProfilesComponent},
  {path:'user/:id/:name', component:UserComponent},
  {path:'**', component:PageNotFoundComponent}
];
