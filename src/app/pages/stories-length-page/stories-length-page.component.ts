import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-stories-length-page',
  templateUrl: './stories-length-page.component.html',
  styleUrls: ['./stories-length-page.component.css']
})
export class StoriesLengthPageComponent implements OnInit {
  stories: any = [];
  storiesLength: number;
  error = null;
  processing = false;

  constructor(
    private authService: AuthService,
    private storiesService: StoriesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  private getPocketStories(length): any {

    this.authService.pocketStories(this.storiesLength)
      .then(result => {
        if (!result) {
          this.router.navigate(['/']);
        }
        this.stories = result;
      })
      . catch((err) => {
        this.error = err.error.code;
        this.processing = false;
      });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.storiesLength = params.time;
      this.getPocketStories(this.storiesLength);
    });
  }

}
