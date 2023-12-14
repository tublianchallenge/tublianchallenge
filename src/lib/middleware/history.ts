import { readable } from "svelte/store"
export default readable(new URL(window.location.href), set => {
  const update = () => set(new URL(window.location.href))
  const originalPushState = history.pushState
  const originalReplaceState = history.replaceState
  history.pushState = function() {
    originalPushState.apply(this, arguments)
    update()
  }
  history.replaceState = function() {
    originalReplaceState.apply(this, arguments)
    update()
  }
  window.addEventListener("popstate", update)
  return () => {
    // Reverting the monkey-patches this way may be unsafe if there's external
    // code patching it too. The next section discusses more about this.
    history.pushState = originalPushState
    history.replaceState = originalReplaceState
    window.removeEventListener("popstate", update)
  }
})