<template>
    <swiper slides-per-view="auto" :space-between="20" :modules="[Pagination
        , Navigation]">
        <swiper-slide v-for="(exp, i) in experiences" :key="i">
            <ContentBox :year="exp.year" :company="exp.company" :description="exp.description" :title="exp.title" />
        </swiper-slide>
    </swiper>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
import ContentBox from './ContentBox.vue';
import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps({
    experiences: Array
});
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

.swiper {
    width: 100%;
}

.swiper-slide {
    width: 87%;
}
</style>
