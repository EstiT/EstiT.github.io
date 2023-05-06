<template>
    <section>
        <h2>Experience</h2>
        <div v-if="desktop">
            <ContentBox v-for="(exp, i) in experiences" :key="i" :year="exp.year" :company="exp.company"
                :description="exp.description" :title="exp.title" />
        </div>
        <div v-else>
            <ExperienceSwiper :experiences="experiences" />
        </div>
    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import ContentBox from './ContentBox.vue';
import ExperienceSwiper from './ExperienceSwiper.vue';


const experiences = [
    {
        year: "2023",
        title: "Software Engineer",
        company: "Canva",
        description: "I am on the Brand Identity team at Canva. The teams main responsibility is the Brand Kit - a pro feature that empowers users to create consistent designs across their brand. I work on the canva code base to improve existing features, fix bugs and add new features related to Brand Kit and Brand Hub."
    },
    {
        year: "2020",
        title: "Software Developer",
        company: "MIK Studio",
        description: "At MIK, I brought designs to life by developing Vue microsites as part of Spotify advertising campaigns for international clients. Microsites include bespoke playlist generation (php) and animations (js/css). In Addition to Spotify, we worked with NSW Health to develop a React video calling app to enable patients to easily contact family during the pandemic."
    },
    {
        year: "2019",
        title: "Associate Frontend Developer ",
        company: "Morgan Stanley",
        description: "As part of the Technology Analyst Program (TAP), I worked in New York where various coding skills and Morgan related technologies were taught. Then joined the Access Management Self Service team in Montreal developing an Angular website that simplified entitlement management. As the team DevOps Champion, I oversaw the adoption of automated deployment and led initiatives to increase code quality and coverage."
    },
    {
        year: "2017",
        title: "Student Developer",
        company: "Royal Bank of Canada",
        description: "On the myMobility team at RBC, I enhanced the iOS and Android apps that the employees used to make business tasks more accessible and convenient. I implemented Google Analytics and Touch ID in the apps. Additionally, I created a UI dashboard to test a REST API and maintain a database."
    }
];
</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";

section {
    padding: var(--section-top) var(--section-sides);

    >div {
        display: grid;
        grid-template-columns: auto auto;
        gap: 3rem;

        @include mobile {
            grid-template-columns: auto;
        }
    }

    @include mobile {
        padding-right: 0;
    }
}
</style>
