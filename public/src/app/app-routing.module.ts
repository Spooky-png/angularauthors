import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { NewAuthorComponent } from './new-author/new-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';



const routes: Routes = [
{ path: 'new', component: NewAuthorComponent },
{ path: 'edit/:authorId', component: EditAuthorComponent },
{ path: 'api/authors/:authorId/quotes', component: NewQuoteComponent},
{ path: '', component: AllAuthorsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
