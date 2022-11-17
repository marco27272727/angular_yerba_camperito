import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Yerba } from './yerbas-list/Yerba';

const URL = 'https://634dee81f34e1ed8268087ce.mockapi.io/api/v1/yerbas';

@Injectable({
  providedIn: 'root'
})
export class YerbaDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Yerba[]>{

    return this.http.get<Yerba[]>(URL);
  }
}
