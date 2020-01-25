import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  authorToEdit: any;
  errors = '';
  constructor(private _router: Router,
    private _route: ActivatedRoute,
    private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe((params) =>{
      this._httpService.getOneAuthor(params.authorId)
      .subscribe((data: any) =>{
        this.authorToEdit = data.author
      })
    })
  }
  submit(){
    this._httpService.updateAuthor(this.authorToEdit)
    .subscribe((editedAuthor)=> {
      if(editedAuthor.hasOwnProperty('errors')){
        this.errors = editedAuthor['errors'].message
      }
      else{
        this._router.navigate(['/'])
      }
  })
  }
}
