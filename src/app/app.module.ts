import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritePageComponent } from './modules/favorites/pages/favorite-page/favorite-page.component';

@NgModule({
  declarations: [ //TODO: Declaraciones , componentes, directivas , pipes
    AppComponent, 
  ],
  imports: [ // Todo: solo se importan modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
