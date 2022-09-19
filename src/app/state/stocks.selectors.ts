import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Stock } from '../stock-list/stocks.model';

export const selectStocks = createFeatureSelector<ReadonlyArray<Stock>>('stocks');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectStockCollection = createSelector(
  selectStocks,
  selectCollectionState,
  (stocks, collection) => {
    return collection.map((id) => stocks.find((stock) => stock.id === id));
  }
);