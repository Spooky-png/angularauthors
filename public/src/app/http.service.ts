import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/authors')
  }
  getAuthorById(id) {
    return this._http.get(`/authors/${id}`);
  }
  createAuthor(newAuthor: any) {
    console.log("in service ", newAuthor)
    return this._http.post('/new', newAuthor)
  }
  deleteAuthor(id) {
    return this._http.delete(`/remove/${id}`)
  }
  updateAuthor(author) {
    return this._http.put(`/authors/${author._id}`, author)
  }
}