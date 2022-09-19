import { Stock } from './../stock-list/stocks.model'

export interface AppState {
    stocks: ReadonlyArray<Stock>
    collection: ReadonlyArray<string>
}