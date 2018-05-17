import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';  /*  Ask TAs about this */
import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  private user: any;
  private userChange: Subject<any> = new Subject();

  private API_URL = environment.API_URL;

  private pocketArticles: any = [];

  userChange$: Observable<any> = this.userChange.asObservable();

  constructor(private httpClient: HttpClient) { }

  private setUser(user?: any) {
    this.user = user;
    this.userChange.next(user);
    return user;
  }

  me(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/auth/me`, options)
      .toPromise()
      .then((user) => this.setUser(user))
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
    }

  signup(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/auth/signup`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  login(user: any): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/auth/login`, user, options)
      .toPromise()
      .then((data) => this.setUser(data));
  }

  pocketLogin(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient
      .get(`${this.API_URL}/auth/pocket`, options)
      .toPromise()
      .then((data: any) => {
        window.location.href = data.url;
      });
  }

  logout(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/auth/logout`, {}, options)
      .toPromise()
      .then(() => this.setUser());
  }

  pocketStories(time): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/stories/pocket/${time}`, options)
    .toPromise()
    .then((result) => {
      this.pocketArticles =  result;
      return result;
    });
  }

  getOneStoryById(id: string) {
    return this.pocketArticles[id];
  }

  }
