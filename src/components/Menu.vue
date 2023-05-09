<template>
    <div class="menu">
        <div class="lines" @click="menuClicked">
            <div class="line" :class="{ x: isOpen }"></div>
            <div class="line" :class="{ hide: isOpen }"></div>
            <div class="line" :class="{ x2: isOpen }"></div>
        </div>
        <div class="options" :class="{ expand: isOpen }">
            <h2 class="name">Esti Tweg</h2>
            <p>Frontend Developer</p>
            <h2 class="option" @click="optionClicked('about')">About Me</h2>
            <h2 class="option" @click="optionClicked('exp')">Experience</h2>
            <h2 class="option" @click="optionClicked('edu')">Education</h2>
            <h2 class="option" @click="optionClicked('skills')">Skills</h2>
            <h2 class="option" @click="optionClicked('portfolio')">Portfolio</h2>
            <button class="button" @click="optionClicked('connect')">Reach out!</button>
        </div>
    </div>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import { ref } from 'vue';


const isOpen = ref(false);

function menuClicked() {
    isOpen.value = !isOpen.value;
}

function optionClicked(option) {
    isOpen.value = false;
    document.querySelector(`#${option}`).scrollIntoView({ behavior: 'smooth' });
}
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.menu {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    padding: 1.6rem;
    z-index: 3;
    background-color: var(--purple-color);
}

.lines {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-end;
    position: relative;
    z-index: 5;

    :first-child {
        width: 1.8rem;
    }

    :last-child {
        width: 1.5rem;
    }
}

.line {
    background-color: var(--white-color);
    height: 3px;
    width: 2rem;
    transition: width, transform 0.2s ease-in-out;
    opacity: 1;
}

.x {
    transform: rotate(45.1deg) translate(11px, 9px);
    width: 2rem !important;
}

.x2 {
    transform: rotate(-43.8deg) translate(6px, -5px);
    width: 2rem !important;
}

.hide {
    opacity: 0;
}

.options {
    height: 0px;
    background-color: var(--purple-color);
    transition: height 0.2s ease-in-out;
    overflow: hidden;
    padding: var(--section-sides) var(--section-sides) 0;
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
}

.expand {
    height: 100vh;
}

.name {
    font-size: 1.7rem;
    font-weight: 800;
    margin-bottom: 0;
}

p {
    margin-top: 0;
    margin-bottom: 2rem;
    font-size: 0.9rem;
}

.option {
    margin: 1rem 0;
}

.button {
    margin: 8rem auto 0 auto;
    display: block;
    font-size: 1.3rem;
    padding: 1rem 3.5rem
}
</style>
