import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CocktailsComponent } from './cocktails/cocktails.component';

const routes: Routes = [

  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path: 'home', component: HomeComponent
  },

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
