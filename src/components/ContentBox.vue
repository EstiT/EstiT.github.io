<template>
    <div class="box">
        <div>
            <h3 class="year">{{ year }}</h3>
            <h3>{{ title }}</h3>
        </div>

        <h4>{{ company }}</h4>
        <p>{{ description }}</p>

    </div>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';


const props = defineProps({
    year: String,
    title: String,
    company: String,
    description: String
})
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.box {
    div {
        display: flex;
        gap: 1.5rem;
    }

    @include mobile {
        padding: 1.5rem;
        min-height: 20.5rem;

        p {
            margin-bottom: 0;
        }

        h4 {
            margin-top: 1rem;
        }
    }
}

h3 {
    font-size: 0.9rem;
    font-weight: 800;
    text-transform: uppercase;
}

.year {
    font-family: Roboto, sans-serif;
    font-weight: 900;
}

h4 {
    color: var(--blue-color);
}

p {
    font-size: 0.8rem;
}
</style>
