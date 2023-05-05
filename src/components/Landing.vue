<template>
    <section>
        <div>
            <h1>Esti <br />Tweg</h1>
            <h2>Frontend Developer</h2>
            <hr v-if="desktop" />
            <button class="button">Reach Out</button>
        </div>
        <div>
            <img class="headshot" src="/src/assets/me.jpg" />
        </div>

    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';

</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

section {
    padding: var(--section-top) var(--section-sides);
    padding-right: 0;
    padding-bottom: 0;
    display: flex;
    max-height: 80vh;

    div:first-child {
        width: 48%;
        padding-right: 3rem;

        @include mobile {
            width: 100%;
            padding-right: 0rem;
        }
    }

    div:last-child {
        width: 52%;

        @include mobile {
            width: 100%;
        }
    }

    @include mobile {
        flex-direction: column;
    }
}

.headshot {
    border-top-left-radius: 2rem;
    margin-left: auto;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @include mobile {
        border-bottom-left-radius: 2rem;
        max-height: 25rem;
    }
}

hr {
    width: 55%;
    display: block;
    margin-right: auto;
    margin-inline-start: unset;
    margin-inline-end: unset;
}

.button {
    margin-top: 26%;

    @include mobile {
        margin-top: 0rem;
        margin-bottom: 2rem;
    }
}

@include mobile {

    h1,
    h2 {
        margin-bottom: 1.5rem;
    }
}
</style>
