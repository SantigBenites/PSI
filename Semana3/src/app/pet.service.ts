import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pet } from './pet';
import { MessageService } from './message.service';
import { PETS } from './mock-pets';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getPets(): Observable<Pet[]> {
    const pets = of(PETS);
    this.messageService.add('PetService: fetched Pets');
    return pets;
  }
}
