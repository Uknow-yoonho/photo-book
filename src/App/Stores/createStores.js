import { BookStore } from './BookStore'
import { FilterStore } from './FilterStore'

export function createStore(routingStore) {
  const bookStore = new BookStore()
  const filterStore = new FilterStore()

  return {
    bookStore,
    filterStore,
    routingStore
  }
}