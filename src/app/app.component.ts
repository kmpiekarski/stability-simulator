import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';


// Component is tasked with presenting data to the user. Getting data (back-end) is for a Service class
// @Component explicitly declaration this file as a component
@Component({
  // component metadata
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  rowData$!: Observable<any[]>;
  // an Observable is "streams of events and data in real-time" meant to handle asynchronous code. So it is persistenly monitoring if a specific action like a "click" occurs

  public colDefs: ColDef[] = [
    { field: '_id' }, 
    { field: 'priceHigh' },
    { field: 'priceLow' },
    { field: 'priceDiff' }
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  }

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData$ = this.http.get<any[]>('https://gist.githubusercontent.com/kmpiekarski/accf7b74bc9d01483a61aa82e9fc7b71/raw/724750c28a81d3bc7eff6c9b2d558e449915115c/hardCodedData.json');
  }
}
