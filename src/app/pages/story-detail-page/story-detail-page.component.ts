import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-story-detail-page',
  templateUrl: './story-detail-page.component.html',
  styleUrls: ['./story-detail-page.component.css']
})
export class StoryDetailPageComponent implements OnInit {

  story: any;
  idStory: string;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
    .subscribe((params) => {
      this.idStory = params.id;
      this.story = this.authService.getOneStoryById(this.idStory);
      console.log(this.story);
    });

  }


}
