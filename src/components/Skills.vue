<template>
    <section id="skills">
        <h2>Skills &<br v-if="mobile" /> Proficiencies</h2>
        <div>
            <div class="box">
                <h4>Software</h4>
                <h5>Web Dev</h5>
                <p>Experience with Angular, React and Vue</p>
                <h5>App Dev</h5>
                <p>Made several native iOS and Android apps</p>
                <h5>Backend</h5>
                <p>Worked with Java and php</p>
            </div>
            <div class="box">
                <h4>Other skills</h4>
                <h5>Organisation</h5>
                <p>Notes and documentation are my favourite</p>
                <h5>Communication</h5>
                <p>A picture is worth a thousand words</p>
                <h5>Attention to Detail</h5>
                <p>Have been called eagle-eyed on more than one occasion</p>
            </div>
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
    if (desktop.value) observer.observe(document.querySelector('#skills'));
});

function fadeIn() {
    observer.unobserve(document.querySelector('#skills'));
    anime({
        targets: '#skills h2, #skills .box',
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

    >div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;

        @include mobile {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
    }
}

h2 {
    text-align: center;
    margin-bottom: 3rem;
    opacity: 0;

    @include mobile {
        opacity: 1;
        text-align: left;
    }
}

.box {
    border-radius: 2rem;
    opacity: 0;

    h4 {
        text-transform: uppercase;
    }

    h5 {
        font-size: 0.95rem;
        margin-bottom: 0;
    }

    p {
        font-size: 0.9rem;
        color: var(--brown-color);
        margin-top: 0.5rem;
    }

    @include mobile {
        opacity: 1;
        padding: 0.5rem 1.5rem 1rem;
        border-radius: 0.5rem;

        h5 {
            margin-top: 0.5rem;
        }

        p {
            margin-bottom: 0.5rem;
        }
    }
}
</style>
