import { createAction, props } from '@ngrx/store';
import { Stock } from './stock.model'

export const requestToGetStocks = createAction(
  '[Stock/API] Request to Get Stocks' //type
);

export const getStockData = createAction(
  'Get Stocks', //type
  props<{ stocks: Stock[] }>() // prop exists to handle the data coming into the action
);

export const fluctuateStock = createAction (
  'Fluctuate (randomize) stock price',
)