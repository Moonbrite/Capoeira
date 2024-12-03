import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';
import { Users } from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient,) {
  }

  apiUrl: string = environment.apiUrl+"users";
  

  getAllUser(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(this.apiUrl)
  }

  getUser(id : number): Observable<Users> {
      return this.httpClient.get<Users>(this.apiUrl+"/"+id);
  }
}
