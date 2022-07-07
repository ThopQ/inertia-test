<script setup>
import { Head, useForm } from "@inertiajs/inertia-vue3";

defineProps({ members: Array });

const form = useForm({
    email: null,
});
</script>

<template>
    <Head title="Welcome" />

    <div class="h-screen w-screen grid place-content-center">
        <div class="card shadow-lg">
            <div class="card-body">
                {{ form.email }}
                <form @submit.prevent="form.post(route('members.store'))">
                    <input v-model="form.email" type="email" />
                    <button type="submit">Senden</button>
                </form>

                <p v-for="member in members" :key="member.id">
                    {{ member.email }}
                </p>
            </div>
        </div>
    </div>
</template>
