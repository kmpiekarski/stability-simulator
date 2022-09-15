import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StockEffects } from './stock.effects';
// import { simulatePriceChange } from './stock.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    EffectsModule.forRoot([StockEffects]),
    StoreModule.forRoot({/* stock: simulatePriceChange */ }, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
