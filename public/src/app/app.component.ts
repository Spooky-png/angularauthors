import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Author } from './models/author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  authors:Author[];
  newAuthor:Author = new Author();
  editAuthor;
  editerrors = [];
  errors = [];
  constructor(private _httpService:HttpService){}

  ngOnInit(){
    this.getAuthorsFromService();
  }

  getAuthorsFromService(){
    this._httpService.getAuthors().subscribe((data:Author[])=>{
      this.authors = data;
      console.log(data)
    })
  }

  createAuthor(){
    let observable = this._httpService.createAuthor(this.newAuthor);
      observable.subscribe(data => {
        if (data['errors']){
          this.errors = data['errors']
        }else{
          this.errors = [];
          this.getAuthorsFromService()
        }
      })
    this.newAuthor = new Author();
  }
  viewAuthor(author) {
    this.viewAuthor = JSON.parse(JSON.stringify(author));
  }
  deleteAuthor(id) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log("successfully deleted author")
      this.getAuthorsFromService()
    })
  }
  updateAuthor() {
    let observable = this._httpService.updateAuthor(this.editAuthor);
    observable.subscribe(data => {
      if (data['errors']){
        this.editerrors = data['errors']
      }else{
        this.editerrors = [];
        this.editAuthor = null;
        this.getAuthorsFromService();
        console.log("successfully updated author!")
      }
    })
  }
  authorForm(author) {
    this.editAuthor = JSON.parse(JSON.stringify(author));
  }
}