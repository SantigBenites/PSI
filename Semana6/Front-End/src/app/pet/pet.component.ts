import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pet.service';

import { Pet } from '../pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetsComponent implements OnInit {

  Pets: Pet[] = [];

  constructor(private petService : PetsService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
    .subscribe(Pets => this.Pets = Pets);
  }

}
