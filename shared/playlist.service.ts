import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(public http: HttpClient, private router: Router) { }

  getplaylists(id: any) {
    return this.http.get(`${environment.baseUrl}/test/${id}`)
  }
}

// return this.http.get(`${environment.baseUrl}/editcont/${id}/${category}`);