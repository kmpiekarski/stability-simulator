import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StockService {
  
  constructor(private http: HttpClient) {}

  getStockJSON() {
    // gets all stock data from JSON file
    return this.http.get('assets/data/stocks.json')
  }

}