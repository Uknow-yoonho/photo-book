import { BookStore } from './BookStore'
import { FilterStore } from './FilterStore'
import { ImageStore } from './ImageStore'
import { AuthStore } from './AuthStore'


export function createStore(routingStore) {
  const bookStore = new BookStore()
  const filterStore = new FilterStore()
  const imageStore = new ImageStore()
  const authStore = new AuthStore()

  return {
    authStore,
    bookStore,
    imageStore,
    filterStore,
    routingStore
  }
}