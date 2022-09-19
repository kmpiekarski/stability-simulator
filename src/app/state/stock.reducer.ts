import { createReducer, on,} from '@ngrx/store';    
import  *  as stockActions from './stock.actions'
import { Stock } from './../stock-list/stocks.model'

import { angularMath } from 'angular-ts-math/dist/angular-ts-math/angular-ts-math';

export const initialState: ReadonlyArray<Stock> = []

/*
[
  { "id":"631c0603efa47fddaaffb9a4", "priceHigh":1937.04, "priceLow":980.68 },
  { "id":"631c060317dc313ac672a8d9", "priceHigh":1715.12, "priceLow":905.16 },
  { "id":"631c060387736aab68db8c87", "priceHigh":1363.11, "priceLow":178.83 },
  { "id":"631c060323ccb028ac614324", "priceHigh":1354.27, "priceLow":457.10 },
  { "id":"631c0603be36245839098cb8", "priceHigh":1657.68, "priceLow":668.40 }
]
*/

export const stocksReducer = createReducer(
  initialState,
  on(stockActions.retrievedStockList, (state, {stocks}) => stocks)
)

// const _renderStocks = createReducer(
//   initialState,
//   on(stockActions.LOAD_STOCKS,
//     (state, ) => state )
// );


// export function renderStocks(state: any, action: Action) {
//   return _renderStocks(state, action);
// }

// export const selectStockState = createFeatureSelector<StockState>('auth');

// export const selectToken = createSelector(
//   selectStockState,
//   (state) => state
// );


/*
export const simulatePriceChange = createReducer(
  initialState,
  takes in argument to determine which column this function applies to. So, the argument determines if it is state.priceHigh or state.priceLow that is being processed
  on(fluctuateStock, state => ({
    ...state,
    generates a random number
    const number = angularMath.getIntegerRandomRange(1, 2);
    number value is used to decide if the stock will go up or down
    const result = (number % 2  == 0) ? "even" : "odd";
    



    switch( result ){
      case 'even':
        // add random amount to stock
        this.state.priceHigh -
      break
      case 'odd':
        // subtract random amount from stock
        this.state.priceHigh - 
      break
      default:
        console.log("no value to fluctuate");
      break;
    }
    on(even, (state) => state.priceHigh
    on(odd, (state) => state.priceLow - 1),
  })),
);

*/

// export class simulatePriceChange {
//     interval = setInterval(function() {
//     }, 250)
//     clearInterval(interval);
// }

// export class calculatePriceDifference {
//    getPriceDiff(): number {
//        return this.priceHigh - this.priceLow;
//   }
// }