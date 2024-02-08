<script setup lang="ts">
import { onBeforeMount, reactive } from 'vue'
import { ConcreteMovieDataResponse, getConcreteMovieData } from '~/services/movieService'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  id: { type: String, required: true }
})

interface stateMovie {
  isLoading: boolean
  concreteMovie: ConcreteMovieDataResponse
}
const state = reactive({
  isLoading: false,
  concreteMovie: {
    Title: ''
  }
} as stateMovie)

onBeforeMount(() => {
  if (props.id) {
    getConcreteMovie(props.id)
  }
})

const getConcreteMovie = async (id: string) => {
  try {
    state.isLoading = true
    state.concreteMovie = await getConcreteMovieData(id)
    state.isLoading = false
  } catch (e) {
    state.isLoading = false
    ElMessage.error('Something went wrong. Please try again.')
    await router.push({ path: '/' })
  }
}
</script>

<template>
  <el-row v-loading.fullscreen.lock="state.isLoading">
    <el-col :span="24" class="pt-4">
      <el-skeleton v-if="!state.concreteMovie.Title" :rows="7" animated />
      <div
        v-if="state.concreteMovie.Title"
        class="flex justify-center items-center flex-col-reverse p-4 md:flex-row"
      >
        <div class="md:pr-3 max-w-96">
          <h2 class="text-4 m-0 my-4 md:m-0 md:mb-4 md:text-4xl">
            {{ state.concreteMovie.Title }}
          </h2>
          <p class="mb-4 text-4 leading-5">Description: {{ state.concreteMovie.Plot }}</p>
          <p class="mb-4 text-4 text-gray-500">Director: {{ state.concreteMovie.Title }}</p>
          <time class="block mb-4 text-4 text-gray-500">Year: {{ state.concreteMovie.Year }}</time>
        </div>

        <el-image
          :src="state.concreteMovie.Poster"
          fit="contain"
          class="w-full md:w-md h-[200px] md:h-sm"
        />
      </div>
    </el-col>
  </el-row>
</template>

<style scoped></style>
