import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Pages
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { notFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { StoriesPageComponent } from './pages/stories-page/stories-page.component';
import { StoryDetailPageComponent } from './pages/story-detail-page/story-detail-page.component';

// Services
import { AuthService } from './services/auth.service';
import { StoriesService } from './services/stories.service';

// Guards
import { InitAuthGuardService } from './guards/init-auth-guard.service';
import { RequireAnonGuardService } from './guards/require-anon-guard.service';
import { RequireUserGuardService } from './guards/require-user-guard.service';
import { StoriesLengthPageComponent } from './pages/stories-length-page/stories-length-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate:  [InitAuthGuardService, RequireAnonGuardService] },
  { path: 'login', component: LoginPageComponent, canActivate: [InitAuthGuardService, RequireAnonGuardService] },
  { path: 'signup', component: SignupPageComponent, canActivate: [InitAuthGuardService, RequireAnonGuardService] },
  { path: 'stories', component: StoriesPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'stories/:time', component: StoriesLengthPageComponent, canActivate: [RequireUserGuardService] },
  { path: 'stories/:id/read', component: StoryDetailPageComponent , canActivate: [RequireUserGuardService] },
  { path: '**', component: notFoundPageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    notFoundPageComponent,
    StoriesPageComponent,
    StoriesLengthPageComponent,
    StoryDetailPageComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    StoriesService,
    InitAuthGuardService,
    RequireAnonGuardService,
    RequireUserGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
