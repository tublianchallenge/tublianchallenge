import { readable } from "svelte/store"
export default readable(window.location.hash, set => {
  const update = () => set(window.location.hash)
  window.addEventListener("hashchange", update)
  return () => window.removeEventListener("hashchange", update)
})