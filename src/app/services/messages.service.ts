import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environment/environment';
import {Card} from '../models/card';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private httpClient:HttpClient,) { }

  apiUrl: string = environment.apiUrl+"discussions";

  getAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.apiUrl)
  }

  getId(id: number | undefined): Observable<number> {
    return this.httpClient.get<number>(this.apiUrl + id)
  }
}
