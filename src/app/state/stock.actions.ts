import { createAction, props } from '@ngrx/store';
import { Stock } from './../stock-list/stocks.model'

export const addStock = createAction(
  '[Stock List] Add Stock',
  props<{ stockId: string }>()
);
 
export const removeStock = createAction(
  '[Stock Collection] Remove Stock',
  props<{ stockId: string }>()
);
 
export const retrievedStockList = createAction(
  '[Stock List/API] Retrieve Stock Success',
  props<{ stocks: ReadonlyArray<Stock> }>()
);

export const fluctuateStock = createAction (
  'Fluctuate (randomize) stock price',
)