<script lang="ts" setup>
import { toggleDark } from '~/composables'
</script>

<template>
  <header>
    <el-menu :default-active="$route.path" router mode="horizontal">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/create-movie">Create movie</el-menu-item>
      <el-menu-item h="full" @click="toggleDark()">
        <button
          class="border-none w-full bg-transparent cursor-pointer"
          style="height: var(--el-menu-item-height)"
        >
          <i inline-flex i="dark:ep-moon ep-sunny" />
        </button>
      </el-menu-item>
    </el-menu>
  </header>
</template>
