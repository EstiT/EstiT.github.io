<template>
    <swiper slides-per-view="auto" :space-between="20" @swiper="onSwiper" @slideChange="onSlideChange" :modules="[Pagination
        , Navigation]">
        <swiper-slide v-for="(award, i) in awards" :key="i">
            <h5>{{ award.title }}</h5>
            <p>{{ award.date }}<span>{{ award.year }}</span></p>
            <p>{{ award.description }}</p>
        </swiper-slide>
        <swiper-slide>
            <h5>full competition results <a target="_blank" href="https://comp-results.netlify.app/">here</a></h5>
            <p><span>2012 - Present</span></p>
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps({
    awards: Array
});

const onSwiper = (swiper) => {
};
const onSlideChange = () => {
};
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.swiper {
    width: calc(100% - var(--section-sides));
    padding-left: var(--section-sides);
}

.swiper-slide {
    width: 87%;
}

h5 {
    text-transform: uppercase;
}

p {
    font-size: 0.8rem;
    padding-right: 1rem;
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
