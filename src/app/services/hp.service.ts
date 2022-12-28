import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HpService {

  constructor(private http: HttpClient) { }

  searchCharacter(searchText: string): Observable<any>{
    return this.http.get('https://hp-api.onrender.com/api/characters/students', {
      params: {
        q:searchText
      }
    }).pipe(
      map((value: any)=> value.name)
    )
  }

}
