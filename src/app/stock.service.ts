import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class StockService {
  
  constructor(private http: HttpClient) {}

  private url = '../assets/data/stocks.json'

  getStockJSON() {
    // gets all stock data from JSON file
    return this.http.get(this.url)
  }

}