import { nextTick } from 'vue'
import Prism from '../plugins/prism'

export function usePrism() {
  const highlightAll = async () => {
    await nextTick()
    Prism.highlightAll()
  }

  const highlightElement = (element: Element) => {
    Prism.highlightElement(element)
  }

  return {
    highlightAll,
    highlightElement,
    Prism
  }
}