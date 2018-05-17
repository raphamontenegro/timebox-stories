import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  username: String;
  email: String;
  password: String;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  callPocket() {
    this.error = '';
    this.processing = true;
    this.authService.pocketLogin()
      .catch((err) => {
        this.error = err.error.code;
        this.processing = false;
      });
  }

}
