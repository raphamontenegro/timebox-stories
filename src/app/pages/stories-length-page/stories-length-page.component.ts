import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stories-length-page',
  templateUrl: './stories-length-page.component.html',
  styleUrls: ['./stories-length-page.component.css']
})
export class StoriesLengthPageComponent implements OnInit {
  stories: any;
  storiesLength: number;

  constructor(private storiesService: StoriesService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.storiesLength = params.time;
      this.storiesService.getAllByLength(this.storiesLength)
      .then(data => {
        if (!data.length) {
          this.router.navigate(['/']);
        }
        this.stories = data;
      });
    });
  }
}
