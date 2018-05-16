import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-story-detail-page',
  templateUrl: './story-detail-page.component.html',
  styleUrls: ['./story-detail-page.component.css']
})
export class StoryDetailPageComponent implements OnInit {

  story: any;
  idStory: string;

  constructor(private storieService: StoriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.activatedRoute.params
    .subscribe((params) => {
      this.idStory = params.id
      this.storieService.getOneById(this.idStory)
      .then(data => this.story = data)
    })

  }
           

}
