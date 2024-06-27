<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>


<template>
    <main class="container">
        <div class="heading">
            <h1>Login</h1>
            <p>Don't have an account? <router-link to="/sign-up">Sign-up</router-link></p>
        </div>
        <v-form class="form" @submit.prevent>
            <v-text-field class="field" label="Nickname" v-model="username" />
            <v-text-field class="field" label="Email" v-model="password" />
            <v-btn type="submit" color="primary" block>Login</v-btn>
        </v-form>
    </main>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 35em;
    margin: 0 auto;
}

.form {
    width: 100%;
}

.heading {
    width: 100%;
    text-align: start;
}
</style>