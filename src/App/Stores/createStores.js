import { BookStore } from './BookStore'
import { FilterStore } from './FilterStore'
import { ImageStore } from './ImageStore'

export function createStore(routingStore) {
  const bookStore = new BookStore()
  const filterStore = new FilterStore()
  const imageStore = new ImageStore()

  return {
    bookStore,
    filterStore,
    imageStore,
    routingStore
  }
}