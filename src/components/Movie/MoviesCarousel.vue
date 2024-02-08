<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getMoviesData, MoviesDataResponse } from '~/services/movieService'
import { onBeforeMount, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const router = useRouter()

const props = defineProps({
  keyword: { type: String, required: true }
})
interface stateMovies {
  isLoading: boolean
  movies: MoviesDataResponse['Search']
}
const state = reactive({
  isLoading: false,
  movies: []
} as stateMovies)

onBeforeMount(() => {
  if (props.keyword) {
    getMovies(props.keyword)
  }
})

const getMovies = async (keyword: string) => {
  try {
    state.isLoading = true
    const data = await getMoviesData(keyword)
    state.movies = data.Search
    state.isLoading = false
  } catch (e) {
    state.isLoading = false
    ElMessage.error('Something went wrong. Please try again.')
    await router.push({ path: '/' })
  }
}

const handlerButton = (id: string) => {
  router.push({ name: 'details', query: { id } })
}
</script>

<template>
  <el-carousel
    v-loading.fullscreen.lock="state.isLoading"
    :interval="4000"
    :autoplay="false"
    height="450px"
  >
    <el-skeleton v-if="!state.movies.length" :rows="5" animated />
    <template v-if="state.movies.length">
      <el-carousel-item
        v-for="item in state.movies"
        :key="item.imdbID"
        class="bg-neutral-300 .dark:bg-neutral-800 rounded-xl"
      >
        <div class="flex justify-center items-center flex-col-reverse p-4 md:px-16 md:flex-row">
          <div class="md:pr-3 md:min-w-md">
            <h2 class="text-4 m-0 my-4 md:m-0 md:mb-4 md:text-4xl">{{ item.Title }}</h2>
            <p class="mb-4 text-4">Director: {{ item.Title }}</p>
            <time class="block mb-4 text-4">Year: {{ item.Year }}</time>
            <el-button type="primary" @click="handlerButton(item.imdbID)">Details</el-button>
          </div>

          <el-image :src="item.Poster" fit="contain" class="w-full h-[200px] md:h-sm" />
        </div>
      </el-carousel-item>
    </template>
  </el-carousel>
</template>

<style scoped lang="scss">
:deep(.el-carousel__indicators--horizontal) {
  width: 100%;
}
</style>
