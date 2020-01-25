import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  allAuthors: any[] = [];
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getAuthors()
  }
  getAuthors(){
    this._httpService.getAllAuthors()
    .subscribe((authors)=>{
      this.allAuthors = authors['authors']
    })
  }
  delete(authorId){
    this._httpService.deleteAuthor(authorId)
    .subscribe((deletedAuthor) => {
    })
  }

}
