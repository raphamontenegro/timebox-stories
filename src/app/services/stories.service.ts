import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';


@Injectable()
export class StoriesService {

  private baseUrl = environment.API_URL;


  constructor(private httpClient: HttpClient) { }

  getAllByLength(length): Promise<any> {
   const options = {
     withCredentials: true
   };
   return this.httpClient.get(`${this.baseUrl}/stories?time=${length}`, options)
     .toPromise();
 }

  getOneById(id: string) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/stories/${id}/read`, options)
      .toPromise();
  }
}

