import { createReducer, on } from '@ngrx/store'
import { addStock, removeStock } from './stock.actions'
  
export const initialState: ReadonlyArray<string> = [];
  
export const collectionReducer = createReducer(
  initialState,
  on(removeStock, (state, { stockId }) => state.filter((id) => id !== stockId)),
  on(addStock, (state, { stockId }) => {
    if (state.indexOf(stockId) > -1) return state;
  
    return [...state, stockId];
  })
);