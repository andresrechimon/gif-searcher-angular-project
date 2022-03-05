import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  get record(){
    return this.gifService.record;
  }

  constructor(private gifService:GifsService) { }

  search(term:string){
    this.gifService.searchGifs(term);
  }
}
