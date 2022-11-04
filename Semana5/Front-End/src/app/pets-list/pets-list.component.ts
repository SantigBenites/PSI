import { Component, OnInit , Input} from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pet.service';
import { Hero } from '../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  Pets: Pet[] =  [];
  @Input() hero: Hero ={_id: "0", name: ""};
  
  constructor(private petService: PetsService){
  }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
    .subscribe(Pets => this.Pets = Pets);
  }

  bind(pet: Pet): void{
    this.hero.pet = pet;
  }
  

}
