import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Papa'
  }  
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
