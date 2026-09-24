import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage
  }

  heroes:IHeroes[]=[
    {
    imagen:'https://dragonball-api.com/characters/17_Artwork.webp',
    nombre:'Android 17',
    descripcion:'Lapis',
    race:'villain',
    ki:40000
    },
    {
    imagen:'https://dragonball-api.com/characters/BuuGordo_Universo7.webp',
    nombre:'Majin Buu',
    descripcion:'¡Te convertiré en chocolate!',
    race:'villain',
    ki:100000
    },
    {
    imagen:'https://dragonball-api.com/characters/Beerus_DBS_Broly_Artwork.webp',
    nombre:'Bills',
    descripcion:'Viene la destruccion',
    race:'other',
    ki:90000
    },
    {
    imagen:'https://dragonball-api.com/characters/Marcarita.webp',
    nombre:'Marcarita',
    descripcion:'Los manuscritos no arden.',
    race:'Assistant of Vermoud',
    ki:99500
    }
  ]
  
}