import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { switchMap, map, mergeMap, catchError } from 'rxjs/operators';

import { StockService } from './stock.service';
import  *  as StockActions from './stock.actions'
import { __values } from 'tslib';

@Injectable()

export class StockEffects {
  loadStocks$ = createEffect(
    () => this.actions$.pipe(
      ofType(StockActions.requestToGetStocks),
      mergeMap(() => this.stockService.getStockJSON()
        .pipe(
          map(stocks => ({
            type: 'Get Stocks',
            stocks
          })),
          catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private stockService: StockService
  ) {}

}