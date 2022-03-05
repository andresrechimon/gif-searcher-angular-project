import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifPageComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule
  ]
  ,
  exports: [
    GifPageComponent
  ]
})
export class GifsModule { }
