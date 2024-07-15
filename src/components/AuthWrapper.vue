<script setup lang="ts">
const isLoading = true
</script>

<template>
    <div v-if="isLoading" :class="$style.centered">
        <v-progress-circular :size="75" indeterminate :class="$style.spinner" />
    </div>
    <RouterView v-else />
</template>

<style module>
.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh
}

.spinner {
    color: white;
}
</style>