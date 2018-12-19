import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
};

@Injectable()
export class BlogsServiceClass {

  private apiUrl = environment.devApi;  // URL to web api

  constructor(private http: HttpClient) { }

  submitBlog(data) {
    return this.http.post(this.apiUrl + '/blog', { data }, httpOptions);
  }

  getAllBlogs(page: number) {
    return this.http.get(this.apiUrl + `/blog?page=${page}`, httpOptions);
  }

  getBlog(id: string) {
    return this.http.get(this.apiUrl + '/blog/' + id, httpOptions);
  }

  addReaction(id: string, action: string, data) {
    return this.http.put(this.apiUrl + '/blog/' + id + '?action=' + action, data, httpOptions);
  }
}
