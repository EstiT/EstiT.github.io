<template>
    <section id="about">
        <div>
            <h6>Who i am</h6>
            <hr v-if="desktop" />
            <h2>About Me</h2>
            <h4>(she/her)</h4>
            <p>
                I am a frontend developer on the Brand Identity team at Canva in Australia.
                I studied Computer Science at Carleton University in Ottawa, Canada. When I'm not coding,
                you can find me on the wall at the climbing gym training for competitions.
            </p>
        </div>
        <div>
            <img class="climbing" src="/src/assets/climbing.jpg" />
        </div>

    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import anime from 'animejs';
import { onMounted } from 'vue';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            fadeIn();
        }
    })
}, { root: null, threshold: 0.3 });


onMounted(() => {
    if (!mobile.value) {
        anime({
            targets: '#about .climbing',
            translateX: [400, 0],
            delay: 50,
            easing: 'easeInOutQuad'
        });
    }

    if (desktop.value) observer.observe(document.querySelector('#about'));
});

function fadeIn() {
    observer.unobserve(document.querySelector('#about'));
    anime({
        targets: '#about h6, #about hr, #about h2, #about h4, #about p',
        opacity: [0, 1],
        delay: anime.stagger(300),
        duration: 900,
        easing: 'easeInOutQuad'
    });
}
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

section {
    padding-left: var(--section-sides);
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
        padding-top: var(--section-top);
        max-height: unset;
    }
}

h6 {
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    margin-top: 3rem;
    margin-bottom: 0.75rem;
    letter-spacing: 0.2em;
    opacity: 0;

    @include mobile {
        margin-top: 0rem;
        opacity: 1;
    }
}

hr {
    opacity: 0;
    width: 55%;
    display: block;
    margin-right: auto;
    margin-inline-start: unset;
    margin-inline-end: unset;
}

h2 {
    margin-top: 8rem;
    margin-bottom: 0.4rem;
    opacity: 0;

    @include mobile {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        opacity: 1;
    }
}

h4 {
    margin-top: 0;
    font-size: 1.1rem;
    opacity: 0;

    @include mobile {
        font-size: 0.9rem;
        opacity: 1;
    }
}

p {
    max-width: 18ch;
    opacity: 0;

    @include mobile {
        font-size: 0.9rem;
        padding-right: var(--section-sides);
        margin-top: 2rem;
        opacity: 1;
    }
}

.climbing {
    border-bottom-left-radius: 2rem;
    margin-left: auto;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @include mobile {
        border-top-left-radius: 2rem;
        max-height: 25rem;
        margin-top: 2rem;
    }
}
</style>
