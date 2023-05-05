<template>
    <section>
        <img class="hero" src="/src/assets/islandCrown.jpg" />
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
    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import ContentBox from './ContentBox.vue';

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

    @include mobile {
        max-height: unset;
        border-top-left-radius: 0;
        border-bottom-right-radius: 2rem;
        width: calc(100% - var(--section-sides));
    }
}

.box {
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
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
