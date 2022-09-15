import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }

  baseURL="http://localhost:8080/api/v1/register";

  public UserRegistration(users:User):Observable<any>{
    return this.http.post(`${this.baseURL}`,users);
  }
}
