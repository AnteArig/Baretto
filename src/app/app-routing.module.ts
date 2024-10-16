import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CocktailsComponent } from './cocktails/cocktails.component';

const routes: Routes = [
  {
    path: 'contacts', component: ContactsComponent
  },


  {
    path: 'cocktails', component: CocktailsComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
