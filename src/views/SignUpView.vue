<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const repeatPassword = ref('')
</script>


<template>
    <main class="container">
        <div class="heading">
            <h1>Sign-up</h1>
            <p>Already have an account? <router-link to="/login">Login</router-link></p>
        </div>
        <v-form class="form" @submit.prevent>
            <v-text-field class="field" label="Nickname" v-model="username" />
            <v-text-field class="field" label="Password" v-model="password" />
            <v-text-field class="field" label="Repeat Password" v-model="repeatPassword" />
            <v-btn type="submit" color="primary" block>Sign-up</v-btn>
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