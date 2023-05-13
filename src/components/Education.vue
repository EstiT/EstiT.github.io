<template>
    <section class="edu">
        <img class="hero" id="edu" src="/src/assets/islandCrown.jpg" />
        <div class="box">
            <div>
                <h3>Education,
                    Awards, and
                    Accomplishments</h3>
            </div>
            <div class="description">
                <h5>Carleton university</h5>
                <p>Bachelor of Computer Science Honours, <span>2019</span>
                    <br />
                    <br />
                    Specialised in Mobile Application Development with a minor in Business
                    Graduated with High Distinction. Spent an exchange semester abroad at Flinders University.
                </p>

            </div>
        </div>
        <Awards v-if="desktop" :awards="awards" />
        <AwardsSwiper v-else :awards="awards" />
    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import Awards from './Awards.vue';
import AwardsSwiper from './AwardsSwiper.vue';
import anime from 'animejs';
import { onMounted } from 'vue';

const awards = [
    {
        title: "SA State Lead Climbing Champion",
        date: "May ",
        year: "2022",
        description: "Held at Vertical Reality Climbing Gym. After two rounds, I topped all the routes and won the competition. "
    },
    {
        title: "UniSA Immerse Festival Hackathon Winner ",
        date: "Dec. ",
        year: "2021",
        description: "Participated in a workshop at University of South Australia where we learned how to make Snapchat filters. I created a filter for each season that would add the appropriate accessories and change the weather. My submission was picked as the Hackathon winner."
    },
    {
        title: "Honour Roll/Ontario Scholar/Dean’s Honour List ",
        year: "2011 - 2019",
        description: "Throughout my education, a high level of academic success was consistently achieved."
    },
];

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            fadeIn();
        }
    })
}, { root: null, threshold: 0.3 });


onMounted(() => {
    if (desktop.value) observer.observe(document.querySelector('#edu'));
});

function fadeIn() {
    observer.unobserve(document.querySelector('#edu'));
    anime({
        targets: '#edu, .edu.box, .edu h3, .edu .description, #awards .award',
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
    padding: var(--section-top) var(--section-sides);

    @include mobile {
        padding-right: unset;
        padding-left: unset;
        width: 100%;
    }
}

.hero {
    width: 100%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    max-height: 45vh;
    object-fit: cover;
    margin-bottom: 0;
    opacity: 0;

    @include mobile {
        opacity: 1;
        max-height: unset;
        border-top-left-radius: 0;
        border-bottom-right-radius: 2rem;
        width: calc(100% - var(--section-sides));
    }
}

.box {
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: var(--white-color);
    padding: 2rem;
    margin-top: 0;
    transform: translateY(-5px);
    color: var(--purple-color);
    display: flex;
    justify-content: space-between;

    @include mobile {
        max-width: 100%;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
        margin-top: 2rem;
        flex-direction: column;
    }


    h3 {
        max-width: 6ch;
        font-weight: 800;

        @include mobile {
            max-width: 8ch;
        }
    }

    h5 {
        text-transform: uppercase;

        @include mobile {
            font-size: 0.95rem;
            margin-top: 0;
            margin-bottom: 0;
        }
    }

    .description {
        width: 60%;

        @include mobile {
            width: 100%;
        }
    }

    p {
        font-size: 0.8rem;
    }

    span {
        font-family: Roboto, sans-serif;
        font-weight: lighter;
    }
}
</style>
