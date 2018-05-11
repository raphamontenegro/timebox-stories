import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories-length-page',
  templateUrl: './stories-length-page.component.html',
  styleUrls: ['./stories-length-page.component.css']
})
export class StoriesLengthPageComponent implements OnInit {

  stories: Array<any>;
  storiesLength: number;

  constructor(private storiesService: StoriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params) => {
      this.storiesLength = params.time;
      this.storiesService.getAllByLength(this.storiesLength)
        .then((data) => {
          this.stories = data;
        });
    });
  }

}
