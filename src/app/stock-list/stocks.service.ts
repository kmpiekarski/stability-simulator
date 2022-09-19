import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stock } from './stocks.model';
 
@Injectable({ providedIn: 'root' })
export class StocksService {
  constructor(private http: HttpClient) {}
 
  getStocks(): Observable<Array<Stock>> {
    return this.http
      .get<{ items: Stock[] }>(
        '../../assets/data/stocks.json'
      )
      .pipe(map((stocks) => stocks.items || []));
  }
}