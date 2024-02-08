<template>
  <BaseHeader />

  <div class="flex justify-center main-container">
    <main class="w-5xl p-4">
      <RouterView />
    </main>
  </div>
</template>

<style>
#app {
  text-align: center;
}
.main-container {
  height: calc(100vh - var(--el-menu-item-height) - 4px);
}
</style>
