import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories-page',
  templateUrl: './stories-page.component.html',
  styleUrls: ['./stories-page.component.css']
})
export class StoriesPageComponent implements OnInit {

  time = 5;
  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.router.navigate([`/stories/${this.time}`]);
    }
  }
}
