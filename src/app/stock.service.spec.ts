import { TestBed } from '@angular/core/testing';
import { StockService } from './stock.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

let service: StockService;
let httpClient: HttpClient;
// let url: '../assets/data/stocks.json'

describe('StockService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule]
    });
    service = TestBed.inject(StockService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('getStockJSON() should return a value', () => {
    expect(service.getStockJSON()).toHaveBeenCalled()
  });

});
