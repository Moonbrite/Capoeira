import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Event } from "../models/event";
import { environment } from "../environement/environment";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class EventService {
  
    constructor(private httpClient:HttpClient,) {
    }
  
    apiUrl: string = environment.apiUrl+"events";
    
  
    getAll(): Observable<Event[]> {
      return this.httpClient.get<Event[]>(this.apiUrl)
    }

    getEvent(id : number): Observable<Event> {
      return this.httpClient.get<Event>(this.apiUrl+"/"+id);
    }

  }