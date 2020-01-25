import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  authorToCreate: any
  errors = ''
  constructor(private _httpService: HttpService,
    private _router: Router) { 
    this.authorToCreate = { name: ''};
  }

  ngOnInit() {
  }
  onSubmit(){
    this._httpService.createAuthor(this.authorToCreate)
    .subscribe((createdAuthor)=> {
      if(createdAuthor.hasOwnProperty('errors')){
        this.errors = createdAuthor['errors'].message
      }
      else{
        this._router.navigate(['/'])
      }
    })
  }
}
