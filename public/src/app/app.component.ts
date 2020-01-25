import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Author } from './server/models/author';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  authors:Author[] = [];
  newAuthor:Author = new Author();
  editAuthor;
  editerrors = [];
  errors = [];
  constructor(private _httpService:HttpService){}

  ngOnInit(){
    this.getAuthorsFromService();
  }

  getAuthorsFromService(){
    this._httpService.getAllAuthors().subscribe((data:Author[])=>{
      for (let author of data){
        author.newQuote = {message:"",rating:0};
      }
      this.authors = data;
      console.log(data)
    })
  }
}