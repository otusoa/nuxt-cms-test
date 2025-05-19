import NProgress from 'nprogress'
import { ref, onMounted } from 'vue'

export function useNProgressLoading(duration = 300) {
  const isLoading = ref(true)

  onMounted(() => {
    NProgress.start()
    setTimeout(() => {
      isLoading.value = false
      NProgress.done()
    }, duration)
  })

  return { isLoading }
}