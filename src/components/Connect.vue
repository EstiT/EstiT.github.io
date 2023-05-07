<template>
    <section>
        <h2>Connect<br v-if="mobile" /> with me</h2>

        <div class="box">
            <h4>Esti Tweg</h4>
            <div class="links">
                <a href="mailto:estictweg@gmail.com" @click="event('email_clicked');">estictweg@gmail.com</a>
                <a href="https://estit.github.io/" @click="event('website_clicked');">estit.github.io</a>
                <a target="_blank" href="https://linktr.ee/estionawall"
                    @click="event('linktree_clicked');">linktr.ee/estionawall</a>
            </div>
            <hr v-if="desktop" />

            <div class="bottom">
                <h5>Find my <br v-if="mobile" />resume <a class="here" target="_blank" @click="event('resume_clicked');"
                        href="https://docs.google.com/document/d/1dnnIfy9HjDpPdOCgKDvWM5q0GvYWU9uFWVD9mZUnc9g/edit?usp=sharing">here</a>
                </h5>
                <div class="socials">
                    <h6 v-if="desktop">Let's get social</h6>
                    <a target="_blank" href="https://www.instagram.com/estionawall/" @click="event('ig_clicked');"><img
                            class="icon" src="/src/assets/ig.svg" /></a>
                    <a target="_blank" href="https://www.facebook.com/estionawall" @click="event('fb_clicked');"><img
                            class="icon" src="/src/assets/fb.svg" /></a>
                    <a target="_blank" href="https://github.com/EstiT" @click="event('github_clicked');"><img class="icon"
                            src="/src/assets/gh.svg" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/esti-tweg/"
                        @click="event('linkedin_clicked');"><img class="icon" src="/src/assets/linkedin.svg" /></a>
                </div>

            </div>
        </div>

    </section>
</template>

<script setup>
import { mobile, desktop } from '../utils/Breakpoints';
import { event } from 'vue-gtag';

</script>

<style scoped lang="scss">
@import "../styles/mixins.scss";


section {
    padding: var(--section-top) var(--section-sides);
}

h2 {
    margin-bottom: 3rem;

    @include mobile {
        text-align: left;
        margin-bottom: 2rem;
    }
}

.box {
    border-radius: 2rem;
    padding: 3rem;

    h4 {
        font-size: 2rem;
        margin: 0 0 2rem;

        @include mobile {
            font-size: 1.2rem;
        }
    }

    h5 {
        font-size: 0.95rem;
        margin: 0;

    }



    .links {
        display: flex;
        justify-content: space-between;
        width: 70%;

        a {
            text-decoration: none;
            color: var(--purple-color);

            &:hover {
                text-decoration: underline;
            }

            @include mobile {
                margin: 0.2rem 0;
            }
        }



        @include mobile {
            flex-direction: column;
            width: 100%;
        }
    }

    @include mobile {
        padding: 2rem 2rem 1.5rem 2rem;
        border-radius: 0.5rem;

        h5 {
            margin-top: 0.5rem;
        }
    }

}

hr {
    margin-top: 2rem;
    background-color: var(--purple-color);
    border-style: solid;
    border-width: 0.5px;
}


.here {
    text-decoration: underline;
    display: inline-block;
    color: var(--purple-color);
}

a {
    cursor: pointer;
}

h6 {
    font-size: 0.8rem;
    text-transform: uppercase;
}

.bottom {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .socials {
        display: flex;
        align-items: center;

        h6 {
            margin-right: 3rem;
        }

        @include mobile {
            align-self: end;
            margin-top: 0.5rem;
        }
    }

    .icon {
        width: 2.5rem;
        object-fit: contain;
        cursor: pointer;
    }

    @include mobile {
        margin-top: 1rem;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
