import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http
      .get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .pipe(map(data => data));
  }
}
