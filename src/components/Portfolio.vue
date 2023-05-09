<template>
    <section id="portfolio">
        <h2>Portfolio</h2>
        <swiper :slides-per-view="'auto'" :autoplay="{
            delay: 3000,
        }" :initial-slide="5" loop :space-between="mobile ? 40 : 100" centered-slides :modules="[Autoplay, Pagination
    , Navigation]" @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide>
                <img src="/src/assets/climbingConverter.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/cluelessClothes.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/alfa.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/canada.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/lulu.png" />
            </swiper-slide>
            <swiper-slide class="emoji-slide">
                <img src="/src/assets/emojiDash.jpeg" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/climbingConverter.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/cluelessClothes.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/alfa.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/canada.png" />
            </swiper-slide>
            <swiper-slide>
                <img src="/src/assets/lulu.png" />
            </swiper-slide>
            <swiper-slide class="emoji-slide">
                <img src="/src/assets/emojiDash.jpeg" />
            </swiper-slide>
        </swiper>
        <img class="phone" :class="{ landscape: index === 5 || index === 11 }" src="/src/assets/iphone.png" />
    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { ref } from "vue";
import 'swiper/css';
import 'swiper/css/pagination';

const projects = [
    { image: '/src/assets/climbingConverter.png', description: "" },
    { image: '/src/assets/cluelessClothes.png', description: "" },
    { image: '/src/assets/alfa.png', description: "" },
    { image: '/src/assets/canada.png', description: "" },
    { image: '/src/assets/lulu.png', description: "" },
];

const index = ref(0);

const onSwiper = (swiper) => {
};

const onSlideChange = (swiper) => {
    index.value = swiper.realIndex;
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

section {
    padding: var(--section-top) var(--section-sides);
    position: relative;
}

h2 {
    margin-bottom: 3rem;
}

.swiper-slide {
    width: 22%;

    @include mobile {
        width: 75%;
    }
}

img {
    width: 100%;
    object-fit: contain;
}

.emoji-slide {

    width: 48% !important;

    img {
        transform: translateY(38%);
        border-radius: 1.4rem;
    }

    @include mobile {
        width: 100% !important;
    }
}

.phone {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40.5%);
    width: 24%;
    z-index: 2;
    pointer-events: none;
    transition: transform 0.2s ease-in-out;

    @include mobile {
        width: 73%;
        transform: translate(-50%, -40%);
    }
}

.landscape {
    transform: translate(-50%, -45%) rotate(90deg);

    @include mobile {
        transform: translate(-50%, -68%) rotate(90deg);
        width: 48%;
    }
}
</style>
