<template>
    <section id="awards">
        <div v-for="(award, i) in awards" :key="i" class="award">
            <h5>{{ award.title }}</h5>
            <p>{{ award.date }}<span>{{ award.year }}</span></p>
            <p>{{ award.description }}</p>
        </div>
        <div class="award">
            <h5>full competition results <a target="_blank" href="https://comp-results.netlify.app/">here</a></h5>
            <p><span>2012 - Present</span></p>
        </div>
    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';

const props = defineProps({
    awards: Array
});
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

h5 {
    text-transform: uppercase;
}

p {
    font-size: 0.8rem;
}

span {
    font-family: Roboto, sans-serif;
    font-weight: lighter;
}

p,
span,
a {
    color: var(--beige-color);
}
</style>
