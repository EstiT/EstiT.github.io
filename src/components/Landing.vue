<template>
    <section id="landing">
        <div class="left">
            <h1>Esti <br />Tweg</h1>
            <h3>Frontend Developer</h3>
            <hr v-if="desktop" />
            <button class="button" @click="reachOutClicked">Reach Out</button>
        </div>
        <div class="right">
            <img class="headshot" src="/src/assets/me.jpg" />
        </div>

    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import { event } from 'vue-gtag';
import anime from 'animejs';
import { onMounted } from 'vue';

onMounted(() => {
    anime({
        targets: '.right',
        translateX: [400, 0],
        delay: 50,
        easing: 'easeInOutQuad'
    });
    anime({
        targets: '#landing h1, #landing h3, #landing hr, #landing .button',
        opacity: [0, 1],
        delay: anime.stagger(400),
        duration: 900,
        easing: 'easeInOutQuad'
    });
});

function reachOutClicked() {
    event('reach_out_clicked');
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

section {
    padding: var(--section-top) var(--section-sides);
    padding-right: 0;
    padding-bottom: 0;
    display: flex;
    max-height: 100vh;

    @include mobile {
        padding-top: 0;
    }

    .left {
        width: 48%;
        padding-right: 3rem;

        @include mobile {
            width: 100%;
            padding-right: 0rem;
        }
    }

    .right {
        width: 52%;

        @include mobile {
            width: 100%;
        }
    }

    @include mobile {
        flex-direction: column;
        max-height: unset;
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
    h3 {
        margin-bottom: 1.5rem;
    }
}
</style>
