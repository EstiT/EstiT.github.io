<script setup>
import { onMounted, ref } from '../../node_modules/vue';
import { mobile, desktop } from '../utils/Breakpoints';
const emit = defineEmits(['resumeClicked']);
const showMobMenu = ref(false);
const isResume = ref(false);

onMounted(() => {
  document.addEventListener('scroll', scrollListener);
});

function smoothScroll(target) {
  emit('resumeClicked', false);
  isResume.value = false;
  setTimeout(() => {
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth', block: "start", inline: "nearest"
    });
    history.pushState(null, null, "#" + target);
  }, 100);
  closeMobMenu();
}

function scrollListener(e) {
  if (desktop.value) {
    if (window.scrollTop < document.getElementById('home')?.offsetTop + 60) {
      document.getElementById('menu').style.backgroundColor = '';
    } else {
      document.getElementById('menu').style.backgroundColor = '#383d61';
    }
  }
}

function animateMenuIcon($event) {
  showMobMenu.value = !showMobMenu.value;
  document.querySelector('.menuContainer').classList.toggle("change");
}

function closeMobMenu() {
  if (mobile.value) {
    showMobMenu.value = !showMobMenu.value;
    document.querySelector('.menuContainer').classList.toggle("change");
  }
}
</script>

<template>
  <div :class="{ 'purple-bg': isResume }">
    <div>
      <div id="header">
      </div>
      <Transition name="fade">
        <div id="mobileMenu" v-if="mobile && showMobMenu">
          <ul>
            <li><a id="homeM" @click="smoothScroll('home')">Home</a></li>
            <li><a id="aboutM" @click="smoothScroll('aboutMe')">About Me</a></li>
            <li><a id="eduM" @click="smoothScroll('education')">Education</a></li>
            <li><a id="expM" @click="smoothScroll('experience')">Experience</a></li>
            <li><a id="portfolioM" @click="smoothScroll('portfolio')">Portfolio</a></li>
            <li><a id="resumeM" @click="emit('resumeClicked', true); closeMobMenu(); isResume.value = true;">Resume</a></li>
            <li><a id="contactM" @click="smoothScroll('contactMe')">Contact Me</a></li>
          </ul>
        </div>
      </Transition>
      <div v-if="desktop">
        <ul id="menu">
          <li><a id="homeM" @click="smoothScroll('home')">Home</a></li>
          <li><a id="aboutM" @click="smoothScroll('aboutMe')">About Me</a></li>
          <li><a id="eduM" @click="smoothScroll('education')">Education</a></li>
          <li><a id="expM" @click="smoothScroll('experience')">Experience</a></li>
          <li><a id="portfolioM" @click="smoothScroll('portfolio')">Portfolio</a></li>
          <li><a id="resumeM" @click="emit('resumeClicked', true); isResume.value = true;">Resume</a></li>
          <li><a id="contactM" @click="smoothScroll('contactMe')">Contact Me</a></li>
        </ul>
      </div>
      <div v-if="mobile" class="menuContainer" @click="animateMenuIcon">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.purple-bg {
  background-color: var(--darkPurple);
}

#menu {
  transition: all .4s ease-in;
  position: fixed;
  float: left;
  list-style: none;
  margin: 0px;
  padding-top: 0px;
  margin-top: 0px;
  width: 100vw;
  z-index: 10000;
}

#menu li {
  float: left;
  font-size: 1.08em;
  margin: 0px 0px 0px 0px;
  padding: 0;
  padding-top: 0px;
  z-index: 10000;
  cursor: pointer;
}

#menu a {
  font-size: 20px;
  color: var(--lightPink);
  display: block;
  float: left;
  margin: 0;
  padding: 1.2rem;
  text-decoration: none;
  z-index: 10000;
}

#menu a:hover {
  color: white;
  z-index: 10000;
}

#header {
  transition: all .4s ease-in;
  height: 3rem;
  width: 100%;
  background-color: var(--darkPurple);
  position: fixed;
  z-index: 7;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  top: 0;
  left: 0;
  display: none;
}

.menuContainer {
  display: none;
  cursor: pointer;
  margin-right: 15px !important;
  padding-right: 7px;
  padding-left: 7px;
  right: 0;
  top: 0;
  position: fixed;
  z-index: 8;
}

#mobileMenu {
  padding: 3rem 25px 1rem;
  text-align: right;
  right: 0;
  position: fixed;
  background-color: var(--darkPurple);
  width: 100%;
  position: fixed;
  z-index: 8;
}

#mobileMenu ul {
  list-style: none;
  margin: 0 0 0 0;
  cursor: pointer;
}

#mobileMenu li {
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 18px;
}

#mobileMenu a {
  color: var(--lightPink);
  text-decoration: none;
}

.bar1,
.bar2,
.bar3 {
  width: 27px;
  height: 3px;
  background-color: var(--lightPink);
  margin: 8px 0;
  transition: 0.4s;
}

.change .bar1 {
  transform: rotate(-45deg) translate(-8px, 7px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}


/*  show/hide menu/ portfolio based on page width */
@media (max-width: 960px) {
  #menu {
    display: none;
  }

  .menuContainer,
  #header {
    display: inline-block;
  }

  .menuContainer {
    top: 0.5rem;
  }


  #home {
    padding-top: 2rem;
  }

  #header {
    padding: 0.5rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
