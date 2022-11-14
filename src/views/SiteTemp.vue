<script setup>
import { onMounted, ref } from '../../node_modules/vue';
import { mobile, desktop } from '../utils/Breakpoints';
import Header from '../components/Header.vue';
import Portfolio from '../components/Portfolio.vue';
import Home from '../components/Home.vue';

const isResume = ref(false);

onMounted(() => {
});

function backToTop() {
  window.scrollTo(0, 0);
}

function resumeClicked(val) {
  isResume.value = val;
}

</script>

<template>
  <div>
    <Header @resumeClicked="resumeClicked" />
    <main class="container" v-if="!isResume">
      <Home />
      <div id="aboutMe">
        <br><br>
        <h2 class="dark" style="padding-left: 35px;">About Me 👩🏻‍💻 🧗🏻‍♀️ ✈️</h2>
        <p class="centerText"> Welcome to my website! My name is Esti Tweg and I am a Computer Science graduate from Carleton University in Ottawa. I specialized in Mobile Application Development and minored in Business. When I’m not coding, you can find me rock climbing or traveling. </p>
        <hr style="margin-top:30px; margin-bottom:0px;">
      </div>
      <div id="skills" class="background">
        <h2 class="dark" style="margin-top:0px; padding-top:40px; padding-left:35px">Technical Skills 🤓</h2>
        <p class="centerText">I've worked with a variety of different technologies while focusing on app dev and front end work.</p>
        <div class="wow fadeInUp skillContainer" style="height: 150px;">
          <img src="/images/java.png" class="skillsImg" />
          <img src="/images/swift.png" class="skillsImg" />
        </div>
        <div class="wow fadeInUp skillContainer" style="height: 100px;">
          <img src="/images/vuejs.png" class="skillsImg" />
          <img src="/images/react.png" class="skillsImg" />
        </div>
      </div>
      <div id="education" class="background">
        <hr style="margin: 0 auto">
        <h2 class="dark" style="padding-left: 35px;">Education 📚</h2>
        <section class="ac-container ">
          <h3 id="ACsubheader">Formal</h3>
          <div>
            <input id="ac-1" name="accordion-1" type="checkbox" />
            <label for="ac-1">Computer Science Mobile App Dev - Carleton University Ottawa, Canada</label>
            <article class="ac-medium">
              <p>Bachelor of Computer Science Honours program. Specialized in Mobile Application Development with a minor in Business. Graduated 2019 with high distinction.</p>
            </article>
          </div>
          <div>
            <input id="ac-2" name="accordion-1" type="checkbox" />
            <label for="ac-2">Technology Analyst Program - Morgan Stanley</label>
            <article class="ac-medium">
              <p>Summer/Fall 2019 Completed the 15 week intensive <a href="https://www.morganstanley.com/people-opportunities/students-graduates/programs/technology/full-time-analyst-north-america" target="_blank">TAP</a> program in New York. Topics included firm orientation, finance, technical training (OS, Concurrency, OO, C++, Java, Scala, C#, DB2, UI) and a final project where a real business problem was solved.</p>
            </article>
          </div>
          <div>
            <input id="ac-3" name="accordion-1" type="checkbox" />
            <label for="ac-3">Exchange Semester - Flinders University Adelaide, Australia</label>
            <article class="ac-medium">
              <p>Second semester of third year was spent abroad in Australia where I continued my Comp Sci and Business courses.</p>
            </article>
          </div>
          <h3 id="ACsubheader">Informal</h3>
          <div>
            <input id="ac-4" name="accordion-1" type="checkbox" />
            <label for="ac-4">Intro to Browser Extensions - Ladies Learning Code</label>
            <article class="ac-medium">
              <p>July 2018 Developed an entertaining chrome extension during this workshop where every image hovered over would change into a cat pic rendered using an online generator.</p>
            </article>
          </div>
          <div>
            <input id="ac-5" name="accordion-1" type="checkbox" />
            <label for="ac-5">UX Design Workshop - Bitmaker Labs</label>
            <article class="ac-small">
              <p>January 2018 learned how to make user friendly interfaces and clickable prototypes with InVision.</p>
            </article>
          </div>
          <div>
            <input id="ac-6" name="accordion-1" type="checkbox" />
            <label for="ac-6">Introduction to GDB</label>
            <article class="ac-medium">
              <p>October 2016 attended interactive workshop lead by David Manouchehri where he talked about how to effectively use GDB to debug code and investigate segfaults.</p>
            </article>
          </div>
          <div>
            <input id="ac-7" name="accordion-1" type="checkbox" />
            <label for="ac-7">FBStart Event</label>
            <article class="ac-medium">
              <p>July 2016 attended Facebooks FBStart presentation for start up companies. There, they spoke about how to best integrate Facebook with apps, advertising with Facebook and how to use Account Kit and Analytics.</p>
            </article>
          </div>
          <div>
            <input id="ac-8" name="accordion-1" type="checkbox" />
            <label for="ac-8">Git for Developers</label>
            <article class="ac-medium">
              <p>Completed a two-day webinar in June 2016 on how to use Git for developers. Many different Git commands were taught. Focused on git log, pull requests, rewriting history, handling merge conflicts and cherry picking. </p>
            </article>
          </div>
          <div>
            <input id="ac-9" name="accordion-1" type="checkbox" />
            <label for="ac-9">BitMaker HTML &amp; CSS</label>
            <article class="ac-small">
              <p>Attended an introduction to HTML &amp; CSS class by <a target="_blank" href="https://bitmaker.co/">BitMaker</a> May 2016. Went over adding pictures, links, videos, different colours, types of fonts and more.</p>
            </article>
          </div>
          <div>
            <input id="ac-10" name="accordion-1" type="checkbox" />
            <label for="ac-10">Toronto Public Library Intro to HTML &amp; CSS</label>
            <article class="ac-medium">
              <p>May 2016 Learned the basics of what HTML &amp; CSS are, how and when to use them, and how to use several different tags. Created basic web pages with embedded videos and links to other pages. </p>
            </article>
          </div>
          <div>
            <input id="ac-11" name="accordion-1" type="checkbox" />
            <label for="ac-11">Cracking the Code Google Workshop</label>
            <article class="ac-medium">
              <p>January 2016, I attended Googles Cracking the Code Workshop organized by Carleton's Computer Science Society. At this workshop, a presentation was given on how to be a better programmer and how to prepare for technical interviews. Coding example problems were then practiced for the duration. </p>
            </article>
          </div>
        </section>
        <hr style="margin:30px auto 0 auto">
      </div>
      <div id="experience" class="background">
        <h2 class="dark" style="padding-top: 55px; padding-left:35px;">Work Experience 🏢</h2>
        <section class="ac-container">
          <div>
            <input id="ac-12" name="accordion-1" type="checkbox" />
            <label for="ac-12">Software Developer - Made In Katana</label>
            <article class="ac-small">
              <p> Dec 2020 - present. <a target="_blank" href="https://www.linkedin.com/company/made-in-katana/">MIK</a> is a digital creative marketing agency based in Australia. With them, I develop web and mobile applications for various clients. </p>
            </article>
          </div>
          <div>
            <input id="ac-13" name="accordion-1" type="checkbox" />
            <label for="ac-13">Associate Front End Developer - Morgan Stanley</label>
            <article class="ac-medium">
              <p> August 2019 - Dec 2020. Started with the 15 week Technology Analyst Program (TAP) in New York where various coding skills and Morgan related technologies were taught. Then joined the Access Management Self Service team developing an Angular website that simplified entitlement management. </p>
            </article>
          </div>
          <div>
            <input id="ac-14" name="accordion-1" type="checkbox" />
            <label for="ac-14">Website Content and Social Media Coordinator - OCF</label>
            <article class="ac-medium">
              <p> June 2016 to Feb 2018. Worked with the Ontario Climbing Federation where I shared and posted climbing news along with competition updates on the federation's Instagram and Facebook. I also managed the Wordpress website where posts were made using HTML, CSS and Javascript. </p>
            </article>
          </div>
          <div>
            <input id="ac-15" name="accordion-1" type="checkbox" />
            <label for="ac-15">Student Developer - RBC</label>
            <article class="ac-medium">
              <p>Summer 2017, I was on the myMobility team at <a target="_blank	" href="https://www.rbcroyalbank.com/personal.htmlRBC"> RBC</a> where I worked on the mobile applications that the employees used to make work more accessible. I enhanced existing iOS and Android apps and created a web UI to test a REST API.</p>
            </article>
          </div>
          <div>
            <input id="ac-16" name="accordion-1" type="checkbox" />
            <label for="ac-16">Junior Mobile Developer - Think Dirty Inc.</label>
            <article class="ac-small">
              <p>Summer 2016, worked on the <a target="_blank	" href="http://www.thinkdirtyapp.com/">Think Dirty</a> iOS mobile application at Think Dirty Inc. Built features to improve usability and display; refactored code to use new common code practices.</p>
            </article>
          </div>
          <div>
            <input id="ac-17" name="accordion-1" type="checkbox" />
            <label for="ac-17">Rock Climbing Instructor - True North Climbing</label>
            <article class="ac-large">
              <p>March 2011 to July 2019, was spent at <a target="_blank	" href="http://www.truenorthclimbing.com/">True North Climbing</a> performing a multitude of jobs including: Belayer, Instructor, Assistant Coach, Youth Program Instructor and Route Setter. As key holding instructor I ensured the closing and opening tasks were conducted. I taught youth and adults how to put harnesses on, tie into the ropes and operate the belay device as well as sell items to customers at the desk. As a Route Setter, I
                designed the paths for the climbers, and as a Belayer, I entertained and supervised groups. </p>
            </article>
          </div>
        </section>
        <hr style="margin-top:30px; margin-bottom:0px;">
      </div>
      <Portfolio />
      <div id="contactMe" class="background">
        <br><br>
        <h2 id="contactMeText" class="dark" style="padding-left: 35px;">Contact Me 📞</h2>
        <div style="display:flex; justify-content: space-evenly; padding-bottom: 2rem">
          <div>
            <a href="mailto:estictweg@hotmail.com?Subject=" class="typcn typcn-mail icon"></a>
            <a href="mailto:estictweg@hotmail.com?Subject=" target="_top" class="contactText">Email</a>
          </div>
          <div>
            <a target="_blank" href="https://ca.linkedin.com/in/esti-tweg-803389120" class="typcn typcn-social-linkedin-circular icon"></a>
            <a target="_blank" href="https://ca.linkedin.com/in/esti-tweg-803389120" class="contactText">LinkedIn </a>
          </div>
          <div>
            <a target="_blank" href="https://github.com/EstiT" class="typcn typcn-social-github-circular icon"></a>
            <a target="_blank" href="https://github.com/EstiT" class="contactText">GitHub</a>
          </div>
          <div>
            <a href="/EstiTwegResume.pdf" download class="typcn typcn-download-outline icon"></a>
            <a target="_blank" href="/EstiTwegResume.pdf" download class="contactText">Resume</a>
          </div>
        </div>
      </div>
      <div class="bg-1 height"></div>
    </main>
    <object v-else style="width: 100vw; height: calc(100vh - 4rem);margin-top: 4rem" data="/EstiTwegResume.pdf" type="application/pdf">
      <embed src="/EstiTwegResume.pdf" type="application/pdf" />
    </object>
    <a href="#" class="back-to-top" @click="backToTop">Back to Top</a>
  </div>
</template>
<style>
:root {
  --background1: rgba(227, 225, 236, 1);
  /*#e2e0ea;*/
  --background2: rgba(244, 244, 247, 1);
  /*#d4d1e0;*/
  --lightPink: #fee8de;
  --purple1: #584c7d;
  --purple2: #4f58ca;
  --salmonPink: #e1949f;
  --darkGrey: #ada7ad;
  --grey: #d2cbd2;
  --darkPurple: #383d61;
  --darkBlush: #9a6068;
}
</style>
<style scoped>
@import '../../typicons.font-2.0.7/typicons.min.css';

@font-face {
  font-family: 'typicons';
  src: url("typicons.font-2.0.7/typicons.eot");
  src: url("typicons.font-2.0.7/typicons.eot?#iefix") format('embedded-opentype'),
    url("typicons.font-2.0.7/typicons.woff") format('woff'),
    url("typicons.font-2.0.7/typicons.ttf") format('truetype'),
    url("typicons.font-2.0.7/typicons.svg#typicons") format('svg');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic, "AppleGothic", sans-serif;
  margin: 0px;
  padding-top: 0px;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

img {
  max-width: 100%;
  height: auto;
  width: auto;
}

th,
td {
  padding-bottom: 10px;
}

hr {
  border: 0;
  border-top: 2px solid var(--darkGrey);
  width: 60%;
  display: block;
}

/*Scroll to top button*/
a.back-to-top {
  display: none;
  width: 15%;
  height: 15%;
  text-indent: -9999px;
  position: fixed;
  z-index: 999;
  right: 1px;
  bottom: 20px;
  background: url("/images/up-arrow.png") no-repeat center 43%;
}


.centerText {
  text-align: center;
}


/*STYLING FOR EACH PAGE*/

.bg-1 {
  background: linear-gradient(45deg, transparent 200px, var(--darkPurple) 50px);
  background-size: 100% 45vw;
}

#aboutMe {
  width: auto;
  min-height: 370px;
  background: var(--background2);
}

#aboutMe p,
#skills p {
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 30px;
  line-height: 1.9;
  margin-bottom: 0px;
}

#skills h3 {
  padding-left: 10%;
  font-size: 1.4em;
  line-height: 1.9;
}

#australia,
#worlds,
#climbing {
  display: none;
}

#skills {
  width: auto;
  resize: both;
  min-height: 400px;
  padding-bottom: 8em;
}

#skills span {
  color: var(--darkBlush);
}

.skillContainer {
  display: flex;
  justify-content: space-evenly;
  margin-top: 5em;
}

.skillsImg {
  max-width: 100%;
  max-height: 100%;
  display: block;
  /* remove extra space below image */
}

#education {
  width: 100%;
  resize: both;
  overflow: auto;
  min-height: 550px;
}

#experience {
  width: auto;
  resize: both;
  overflow: auto;
  min-height: 300px;
}

#contactMe {
  width: auto;
  min-height: 45vh;
}



/*STYLING FOR EDUCATION DROP DOWN*/
.ac-container {
  margin: 25px 25px 50px 50px;
  float: inherit;
  padding: 2% 4% 4% 4%;
}

.ac-container label {
  padding: 1rem;
  margin-top: 6px;
  position: relative;
  display: block;
  min-height: 30px;
  cursor: pointer;
  color: black;
  line-height: 33px;
  font-size: 1.2em;
  overflow: hidden;
}

.ac-container label:hover {
  background: var(--background1);
  color: var(--darkPurple);
}

.ac-container input:checked+label,
.ac-container input:checked+label:hover {
  background: var(--background1);
  color: var(--darkPurple);
  box-shadow:
    0px 0px 0px 1px rgba(155, 155, 155, 0.3),
    0px 2px 2px rgba(0, 0, 0, 0.1);
}

.ac-container label:hover:after,
.ac-container input:checked+label:hover:after {
  content: '';
  position: absolute;
  width: 65px;
  height: 24px;
  right: 13px;
  top: 1.1rem;
  background: transparent url(/images/arrow_down.png) no-repeat center;
  background-size: 1.2rem;
}

.ac-container input:checked+label:hover:after {
  background-image: url(/images/arrow_up.png);
}

.ac-container input {
  display: none;
}

.ac-container article {
  background: rgba(255, 255, 255, 0.5);
  margin-top: -1px;
  overflow: hidden;
  height: 0px;
  position: relative;
  transition:
    height 0.3s ease-in-out,
    box-shadow 0.6s linear;
}

.ac-container input:checked~article {
  transition:
    height 0.5s ease-in-out,
    box-shadow 0.1s linear;
  box-shadow: 0px 0px 0px 1px rgba(155, 155, 155, 0.3);
  width: 100%;
  height: auto;
  display: inline-block;
}

.ac-container article p {
  line-height: 23px;
  /* padding: 8px; */
  font-family: "Avenir", Avenir;
  font-size: 1.1em;
}

.light {
  color: var(--lightPink);
}

.dark {
  color: var(--darkPurple);
}

.background {
  background-color: var(--background2);
}

h1,
h2,
h3 {
  color: var(--darkPurple);
}

@media screen and (min-width: 750px) {

  p {
    display: block;
    margin-left: 0px;
    margin-right: 0px;
    padding-bottom: 15px;
    padding-left: 20px;
    font-size: 1.3em;
  }

  h1 {
    display: block;
    font-size: 3em;
    margin-left: 0.0px;
    padding-top: 15px;
    padding-left: 10px;
    font-weight: bolder;
  }


  h2 {
    font-weight: bolder;
    display: block;
    font-size: 2em;
    margin-left: 0.0px;
    margin-right: 0.0px;
    padding-top: 15px;
  }

  h3 {
    font-size: 1.3em;
    font-weight: bolder;
    padding-left: 10px;
  }

  ul,
  menu,
  dir {
    display: block;
    list-style-type: disc;
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 40px;
  }
}

a {
  color: var(--darkBlush);
  text-decoration: none;
}

.square {
  color: black;
  text-decoration: none;
}

/*contact me icon and text*/
.icon {
  font-size: 70px;
  font-weight: lighter;
  text-decoration: none;
  text-align: center;
  margin: 0 auto;
  display: block;
  color: var(--purple1) !important;
}

.icon:hover {
  color: var(--darkPurple) !important;
}

.contactText {
  color: var(--purple1) !important;
  font-size: 20px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-weight: bold;
}

.contactText:hover {
  color: var(--darkPurple) !important;
  font-size: 20px;
}

#ACsubheader {
  font-weight: bolder;
  padding-left: 0px;
  margin-left: -5px;
}

.height {
  min-height: 8vh;
}

/*  show/hide menu/ portfolio based on page width */
@media (max-width: 775px) {
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

  #aboutMe p {
    padding: 1.5rem;
  }

  .ac-container {
    margin: 1rem;
  }

  .ac-container label {
    padding: 0.5rem;
  }

  .icon {
    font-size: 50px;
  }

  .contactText {
    display: none
  }

  #contactMe {
    height: 35vh;
  }

  #header {
    padding: 0.5rem;
  }

  .skillsImg {
    object-fit: contain;
    width: 30%;
  }
}

canvas {
  background: #eee;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}


p {
  margin-left: 10px;
  margin-top: 10px;
}


p {
  display: block;
  -webkit-margin-before: 2em;
  -webkit-margin-after: 2em;
  -webkit-margin-start: 2px;
  -webkit-margin-end: 2px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 25px;
}

a:link,
a:visited {
  color: var(--salmonPink);
}
</style>
