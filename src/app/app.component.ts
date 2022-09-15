import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColDef, GridReadyEvent, GridOptions } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { requestToGetStocks, getStockData } from './stock.actions';
import { Stock } from './stock.model';
// import { StockService } from './stock.service';

@Component({
  // component metadata
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[/* StockService */]
})

export class AppComponent {

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

  constructor(private store: Store) {
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
  return [
    { id: "631c0603efa47fddaaffb9a4", priceHigh: "$1,937.04", priceLow: "$980.68" },
    { id: "631c060317dc313ac672a8d9", priceHigh: "$1,715.12", priceLow: "$905.16" },
    { id: "631c060387736aab68db8c87", priceHigh: "$1,363.11", priceLow: "$178.83" },
    { id: "631c060323ccb028ac614324", priceHigh: "$1,354.27", priceLow: "$457.10" },
    { id: "631c0603be36245839098cb8", priceHigh: "$1,657.68", priceLow: "$668.40" }
  ];
}

  // private createRowData() {
  //   return this.store.dispatch(requestToGetStocks())
  // }


  // onGridReady(params: GridReadyEvent) {
  //   // this.store.dispatch(getStockData())
  // }

  ngOnInit() {
    this.store.dispatch(requestToGetStocks())
  }

}