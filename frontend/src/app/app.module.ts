import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/partials/header/header.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './Components/partials/search/search.component';
import { TagsComponent } from './Components/partials/tags/tags.component';
import { FoodPageComponent } from './Components/pages/food-page/food-page.component';
import { CartPageComponent } from './Components/pages/cart-page/cart-page.component';
import { TitleComponent } from './Components/partials/title/title.component';
import { NotFoundComponent } from './Components/partials/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchComponent, TagsComponent, FoodPageComponent, CartPageComponent, TitleComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, RatingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
