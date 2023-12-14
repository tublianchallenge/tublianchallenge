import { URL } from "url"
import { writable } from "svelte/store"
const url = writable(new URL("https://example.com"))
export default {
  subscribe: url.subscribe,
  set: href => url.set(new URL(href)),
}