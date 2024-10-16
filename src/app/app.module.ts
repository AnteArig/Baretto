import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './menu/menu.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ContactsComponent } from './contacts/contacts.component';
import { CocktailsComponent } from './cocktails/cocktails.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContactsComponent,
    CocktailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
