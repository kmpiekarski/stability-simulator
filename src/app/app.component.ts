import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef, GridReadyEvent, GridOptions } from 'ag-grid-community';
import { selectStockCollection, selectStocks } from './state/stocks.selectors';
import {
  retrievedStockList,
  addStock,
  removeStock,
} from './state/stock.actions';
import { StocksService } from './stock-list/stocks.service';

@Component({
  // component metadata
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[/* StockService */]
})

export class AppComponent {

  stocks$ = this.store.select(selectStocks);
  stockCollection$ = this.store.select(selectStockCollection);

  public colDefs: ColDef[] = [
    { field: 'id' }, 
    { field: 'priceHigh' },
    { field: 'priceLow' },
    { field: 'priceDiff' }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  }

  public gridOptions: GridOptions;

  constructor(
    private stocksService: StocksService,
    private store: Store
    ) {
    this.gridOptions = <GridOptions>{
      rowData: this.createRowData(),
      columnDefs: this.createColumnDefs(),
      // enableFilter: true,
      // onGridReady: () => {}
    }
  }

  private createColumnDefs() {
    return [
      { headerName: "ID", field: "id" },
      { headerName: "Price High", field: "priceHigh" },
      { headerName: "Price Low", field: "priceLow" },
      { headerName: "Price Difference", field: "priceDiff" }
    ];
}

  private createRowData() {
  
  }

  ngOnInit() {
    this.stocksService
      .getStocks()
      .subscribe((stocks) => this.store.dispatch(retrievedStockList({ stocks })));
  }

}