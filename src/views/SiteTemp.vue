<script setup>
import { onMounted } from 'vue';


onMounted(() => {
	document.addEventListener('scroll', scrollListener);
});

function backToTop() {
	window.scrollTo(0,0);
}

function scrollListener(e) {

	if (window.scrollTop < document.getElementById('home').offsetTop + 60) {
		document.getElementById('menu').style.backgroundColor = '';
	} else {
		document.getElementById('menu').style.backgroundColor = '#383d61';
	}
}

</script>

<template>
  <div>
  <div>
  <div id="header">
  </div>

  <div id="mobileMenu">
    <ul>
      <li><a id="homeM" onclick="smoothScroll('home')">Home</a></li>
      <li><a id="aboutM" onclick="smoothScroll('aboutMe')">About Me</a></li>
      <li><a id="eduM" onclick="smoothScroll('education')">Education</a></li>
      <li><a id="expM" onclick="smoothScroll('experience')">Experience</a></li>
      <li><a id="portfolioM" onclick="smoothScroll('portfolio')">Portfolio</a></li>
      <li><a id="resumeM" href="resume.html">Resume</a></li>
      <li><a id="contactM" onclick="smoothScroll('contactMe')">Contact Me</a></li>
    </ul>
  </div>
  <div>
  <ul id="menu">
    <li><a id="homeM" onclick="smoothScroll('home')">Home</a></li>
    <li><a id="aboutM" onclick="smoothScroll('aboutMe')">About Me</a></li>
    <li><a id="eduM" onclick="smoothScroll('education')">Education</a></li>
    <li><a id="expM" onclick="smoothScroll('experience')">Experience</a></li>
    <li><a id="portfolioM" onclick="smoothScroll('portfolio')">Portfolio</a></li>
    <li><a id="resumeM" href="resume.html">Resume</a></li>
    <li><a id="contactM" onclick="smoothScroll('contactMe')">Contact Me</a></li>
  </ul>
  </div>
  <div class="menuContainer" onclick="animateMenuIcon(this)">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
  </div>
    <main class="container">
      <div id="home" class="bg-1">
          <div id="homeCell">
            <h1 class="light" id="name">Esti Tweg</h1>
            <h2 class="light" style="padding-left: 55px;" id="subhead">Mobile App Developer</h2>
          </div>
          <img id="meImg" src="images/me.jpg"/>
      </div>

      <div id="aboutMe">
        <br><br>
        <h2 class="dark" style="padding-left: 35px;">About Me 👩🏻‍💻 🧗🏻‍♀️ ✈️</h2>
          <p class="centerText">
            Welcome to my website! My name is Esti Tweg and I am a Computer Science graduate from Carleton
            University in Ottawa.
            I specialized in Mobile Application Development and minored in Business. When I’m not coding, you can find me rock climbing or travelling(pre-pandemic).
          </p>
        <hr style="margin-top:30px; margin-bottom:0px;">
      </div>


      <div id="skills" class="background">
        <h2 class="dark" style="margin-top:0px; padding-top:40px; padding-left:35px">Technical Skills 🤓</h2>
        <p class="centerText">I've worked with a variety of different technologies while focusing on app dev and front end
          work.</p>
        <div class="wow fadeInUp skillContainer" style="height: 150px;">
          <img src="images/java.png" class="skillsImg" />
          <img src="images/swift.png" class="skillsImg" />
        </div>
        <div class="wow fadeInUp skillContainer" style="height: 100px;">
          <img src="images/vuejs.png" class="skillsImg" />
          <img src="images/react.png" class="skillsImg" />
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
              <p>Bachelor of Computer Science Honours program. Specialized in Mobile Application Development 
                with a minor in
                Business. Graduated 2019 with high distinction.</p>
            </article>
          </div>
          <div>
            <input id="ac-2" name="accordion-1" type="checkbox" />
            <label for="ac-2">Technology Analyst Program - Morgan Stanley</label>
            <article class="ac-medium">
              <p>Summer/Fall 2019 Completed the 15 week intensive <a
                  href="https://www.morganstanley.com/people-opportunities/students-graduates/programs/technology/full-time-analyst-north-america"
                  target="_blank">TAP</a> program in New York. Topics included firm orientation, finance, technical
                training (OS, Concurrency, OO, C++, Java, Scala, C#, DB2, UI) and a final project where a real business
                problem was solved.</p>
            </article>
          </div>
          <div>
            <input id="ac-3" name="accordion-1" type="checkbox" />
            <label for="ac-3">Exchange Semester - Flinders University Adelaide, Australia</label>
            <article class="ac-medium">
              <p>Second semester of third year was spent abroad in Australia where I continued my Comp Sci and Business
                courses.</p>
            </article>
          </div>
          <h3 id="ACsubheader">Informal</h3>

          <div>
            <input id="ac-4" name="accordion-1" type="checkbox" />
            <label for="ac-4">Intro to Browser Extensions - Ladies Learning Code</label>
            <article class="ac-medium">
              <p>July 2018 Developed an entertaining chrome extension during this workshop where every image hovered
                over would change into a cat pic rendered using an online generator.</p>
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
                <p>October 2016 attended interactive workshop lead by David Manouchehri where he talked about
                  how to effectively use GDB to debug code and investigate segfaults.</p>
              </article>
            </div>
            <div>
              <input id="ac-7" name="accordion-1" type="checkbox" />
              <label for="ac-7">FBStart Event</label>
              <article class="ac-medium">
                <p>July 2016 attended Facebooks FBStart presentation for start up companies. There, they spoke
                  about how to best integrate Facebook with apps, advertising with Facebook and how to use Account
                  Kit and Analytics.</p>
              </article>
            </div>
            <div>
              <input id="ac-8" name="accordion-1" type="checkbox" />
              <label for="ac-8">Git for Developers</label>
              <article class="ac-medium">
                <p>Completed a two-day webinar in June 2016 on how to use Git for developers. Many different Git
                  commands were taught. Focused on git log, pull requests, rewriting history, handling merge
                  conflicts and cherry picking. </p>
              </article>
            </div>
            <div>
              <input id="ac-9" name="accordion-1" type="checkbox" />
              <label for="ac-9">BitMaker HTML &amp; CSS</label>
              <article class="ac-small">
                <p>Attended an introduction to HTML &amp; CSS class by <a target="_blank"
                    href="https://bitmaker.co/">BitMaker</a>
                  May 2016. Went over adding pictures, links, videos, different colours, types of fonts and more.</p>
              </article>
            </div>
            <div>
              <input id="ac-10" name="accordion-1" type="checkbox" />
              <label for="ac-10">Toronto Public Library Intro to HTML &amp; CSS</label>
              <article class="ac-medium">
                <p>May 2016 Learned the basics of what HTML &amp; CSS are, how and when to use them, and how to use
                  several different tags. Created basic web pages with embedded videos and links to other
                  pages. </p>
              </article>
            </div>
            <div>
              <input id="ac-11" name="accordion-1" type="checkbox" />
              <label for="ac-11">Cracking the Code Google Workshop</label>
              <article class="ac-medium">
                <p>January 2016, I attended Googles Cracking the Code Workshop organized by Carleton's
                  Computer Science Society. At this workshop, a presentation was given on how to be a better
                  programmer and how to prepare for technical interviews. Coding example problems were then
                  practiced for the duration. </p>
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
              <p>
                Dec 2020 - present. <a target="_blank" href="https://www.linkedin.com/company/made-in-katana/">MIK</a> is a digital creative marketing agency based in Australia. With them, I develop web and mobile applications for various clients. 
              </p>
            </article>
          </div>
          <div>
            <input id="ac-13" name="accordion-1" type="checkbox" />
            <label for="ac-13">Associate Front End Developer - Morgan Stanley</label>
            <article class="ac-medium">
              <p>
                August 2019 - Dec 2020. Started with the 15 week Technology Analyst Program (TAP) in New York where various coding skills and Morgan related technologies were taught. Then joined the Access Management Self Service team developing an Angular website that simplified entitlement management.
              </p>
            </article>
          </div>
          <div>
            <input id="ac-14" name="accordion-1" type="checkbox" />
            <label for="ac-14">Website Content and Social Media Coordinator - OCF</label>
            <article class="ac-medium">
              <p>
                June 2016 to Feb 2018. Worked with the Ontario Climbing Federation where I shared and posted climbing
                news along with competition updates on the federation's Instagram and Facebook. I also managed the
                Wordpress website where posts were made using HTML, CSS and Javascript.
              </p>
            </article>
          </div>
          <div>
            <input id="ac-15" name="accordion-1" type="checkbox" />
            <label for="ac-15">Student Developer - RBC</label>
            <article class="ac-medium">
              <p>Summer 2017, I was on the myMobility team at <a target="_blank	"
                  href="https://www.rbcroyalbank.com/personal.htmlRBC"> RBC</a> where I worked on the mobile
                applications that the employees used to make work more accessible. I enhanced existing iOS and Android
                apps and created a web UI to test a REST API.</p>
            </article>
          </div>
          <div>
            <input id="ac-16" name="accordion-1" type="checkbox" />
            <label for="ac-16">Junior Mobile Developer - Think Dirty Inc.</label>
            <article class="ac-small">
              <p>Summer 2016, worked on the <a target="_blank	" href="http://www.thinkdirtyapp.com/">Think Dirty</a> iOS
                mobile application at Think Dirty Inc. Built features to improve usability and display; refactored code
                to use new common code practices.</p>
            </article>
          </div>
          <div>
            <input id="ac-17" name="accordion-1" type="checkbox" />
            <label for="ac-17">Rock Climbing Instructor - True North Climbing</label>
            <article class="ac-large">
              <p>March 2011 to July 2019, was spent at <a target="_blank	" href="http://www.truenorthclimbing.com/">True
                  North Climbing</a>
                performing a multitude
                of jobs including: Belayer, Instructor, Assistant Coach, Youth Program Instructor and Route
                Setter. As key holding instructor I ensured the closing and opening
                tasks were conducted. I taught youth and adults
                how to put harnesses on, tie into the ropes and operate the belay device as well as sell items to
                customers at the desk. As a Route Setter, I designed the paths for the climbers, and as a Belayer,
                I entertained and supervised groups.
              </p>
            </article>
          </div>
        </section>
        <hr style="margin-top:30px; margin-bottom:0px;">
      </div>


      <div id="portfolio" class="background">
        <a style="text-decoration:none;" target="_blank" href="https://github.com/EstiT">
          <h2 class="dark" style="padding-top: 55px; padding-left: 35px;">Portfolio 🎨</h2>
        </a>
        <table id="portfolioTable" style="width: 97%" align="center" cellspacing="17">
          <tr>
            <th width="25%" class="top">
              <div class="wow fadeInUp portfolioCell">
                <a target="_blank	" href="https://github.com/EstiT/CluelessClothes-iOS">
                  <img class="image" src="images/cluelessClothes.png" width="100%" />
                </a>
                <a target="_blank	" href="https://github.com/EstiT/CluelessClothes-iOS">
                  <p class="text">
                    <u style="color:black;"><b><br/>Clueless Clothes iOS app</b></u><br>
                    <span style="color:black;">
                      Add photos of your clothes and match them to create outfits.
                    </span>
                    <br><br>
                  </p>
                </a>
              </div>

              <br><br>

              <div class="wow fadeInUp portfolioCell">
                <a target="_blank	" href="https://github.com/EstiT/squareGame"><img class="image"
                    src="images/square.png" width="100%" /></a>
                <a target="_blank	" href="https://github.com/EstiT/squareGame">
                  <p class="text square" style="color:black;">
                    <u style="color:black;"><b>Square Game</b></u><br><span style="color:black;">While the red square
                      moves, press the space bar to stop it inside the bounds.
                    </span><br><br>
                    <button type="button"> <a class="square" href="squareIndex.html">Play here!</a></button>
                  </p>
                </a>
              </div>
              <br><br>
              <div class="wow fadeInUp portfolioCell">
                <a target="_blank	" href="https://github.com/EstiT/ImageOverlay">
                  <img class="image" src="images/mario.png" width="100%" />
                </a>
                <a target="_blank	" href="https://github.com/EstiT/ImageOverlay">
                  <p class="text">
                    <u><b>Image Overlay</b></u><br>You specify two images, one to be the background and the other to be
                    placed transparently on top. In this example, there is a Mario character floating in a level.
                  </p>
                </a>
              </div>

            </th>

            <th width="25%" class="top">
              <div class="wow fadeInUp portfolioCell">
                <a target="_blank	" href="https://github.com/EstiT/Emoji-Dash-iOS"> <img class="image"
                    src="images/emojiDash.jpeg" width="100%" /></a>
                <a target="_blank	" href="https://github.com/EstiT/Emoji-Dash-iOS">
                  <p class="text">
                    <u style="color:black;"><b>Emoji-Dash</b></u> <br><span style="color:black;">iOS game for my honours
                      project. Uses SpriteKit.</span>
                    <br><br>
                  </p>
                </a>
              </div>

              <br><br>

              <div class="wow fadeInUp portfolioCell">
                <a target="_blank	" href="https://github.com/EstiT/ClimbingGradeConverter">
                  <img class="image" src="images/climbingConverter.png" width="100%" />
                </a>
                <a target="_blank	" href="https://github.com/EstiT/ClimbingGradeConverter">
                  <p class="text">
                    <u style="color:black;"><b><br>Climbing Grade Converter iOS app</b></u><br>
                    <span style="color:black;">
                      Convert climbing grades between different systems used world wide.
                    </span>
                    <br><br>
                  </p>
                </a>
              </div>

              <br><br>

              <div class="wow fadeInUp portfolioCell">
                <a target="_blank	" href="https://github.com/EstiT/logIt-SwiftUI"> <img class="image"
                    src="images/logit.png" width="100%" /></a>
                <a target="_blank	" href="https://github.com/EstiT/logIt-SwiftUI">
                  <p class="text">
                    <u><b>Climbing training tracker app</b></u><br>iOS app developed with SwiftUI to track climbing progress in an analytical and visual manner.
                  </p>
                </a>
              </div>
            </th>
            <th width="25%" class="top">
              <div class="wow fadeInUp portfolioCell">
                <a target="_blank" href="https://github.com/cuhacking/CUHackingApp"><img class="image"
                    src="images/cuhacking.png" width="100%" /></a>
                <a target="_blank" href="https://github.com/cuhacking/CUHackingApp">
                  <p class="text">
                    <u><b>CUhacking Android App</b></u><br>Group project for school. Created an app to make the
                    hackathon more enjoyable for hackers.
                  </p>
                </a>
              </div>

              <br><br>

              <div class="wow fadeInUp portfolioCell">
                <a target="_blank	" href="https://github.com/EstiT/TicTacToe"><img class="image"
                    src="images/tictactoe.png" width="100%" /></a>
                <a target="_blank	" href="https://github.com/EstiT/TicTacToe">
                  <p class="text">
                    <u><b>Tic Tac Toe</b></u><br>Play Tic Tac Toe against a computer.
                  </p>
                </a>
              </div>
              <br><br>
              <div class="wow fadeInUp portfolioCell">
                <a target="_blank	" href="https://github.com/EstiT/AsciiArtMaker"><img class="image"
                    src="images/asciiPresent.png" width="100%" id="ascii" /></a>
                <a target="_blank	" href="https://github.com/EstiT/AsciiArtMaker">
                  <p class="text">
                    <u><b>Image to Ascii Art</b></u><br>You upload an image, choose what the background colour is and
                    what to save the text file as. The program converts each pixel in the image to a symbol. Small
                    images work best.
                  </p>
                </a>
              </div>
            </th>
          </tr>
        </table>



        <table id="mobilePortfolioTable" style="width: 95%;" align="center" cellspacing="20" class="background">
          <tr>
            <td>
              <div>
                <a class="square" target="_blank"
                  href="https://itunes.apple.com/us/app/emoji-dash/id1457248567?ls=1&mt=8">
                  <img class="image wow fadeInUp" src="images/emojiDash.jpeg" width="100%" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <a target="_blank" href="https://apps.apple.com/ca/app/cluelessclothes/id1527894150">
                  <img class="image wow fadeInUp" src="images/cluelessClothes.png" width="100%" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <a target="_blank	" href="squareIndex.html">
                  <img class="image wow fadeInUp" src="images/square.png" width="100%" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <a target="_blank" href="https://github.com/EstiT/logIt-SwiftUI">
                  <img class="image wow fadeInUp" src="images/logit.png" width="100%" />
                </a>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <a target="_blank	" href="https://github.com/EstiT/ClimbingGradeConverter">
                  <img class="image wow fadeInUp" src="images/climbingConverter.png" width="100%" />
                </a>
              </div>
            </td>
          </tr>
        </table>

        <hr style="margin-top:30px; margin-bottom:0px;">
      </div>


      <div id="contactMe" class="background">
        <br><br>
        <h2 id="contactMeText" class="dark" style="padding-left: 35px;">Contact Me 📞</h2>
        <div style="display:flex; justify-content: space-evenly;">
            <div>
              <a href="mailto:estictweg@hotmail.com?Subject=" class="typcn typcn-mail icon"></a>
              <br>
              <a href="mailto:estictweg@hotmail.com?Subject=" target="_top" class="contactText">Email</a>
            </div>
            <div>
              <a target="_blank" href="https://ca.linkedin.com/in/esti-tweg-803389120"
                class="typcn typcn-social-linkedin-circular icon"></a>
              <br>
              <a target="_blank" href="https://ca.linkedin.com/in/esti-tweg-803389120" class="contactText">LinkedIn
              </a>
            </div>
            <div>
              <a target="_blank" href="https://github.com/EstiT" class="typcn typcn-social-github-circular icon"></a>

              <br>
              <a target="_blank" href="https://github.com/EstiT" class="contactText">GitHub</a>
            </div>
            <div>
              <a href="EstiTwegResume.pdf" download class="typcn typcn-download-outline icon"></a>
              <br>
              <a target="_blank" href="EstiTwegResume.pdf" download class="contactText">Resume</a>
            </div>
        </div>
      </div>
      <div class="bg-1 height"></div>

    </main>

    <a href="#" class="back-to-top" @click="backToTop">Back to Top</a>
    </div>
</template>
<style>
:root {
  --background1: rgba(227,225,236,1);
  /*#e2e0ea;*/
  --background2: rgba(244,244,247,1);
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

th, td {
  /* padding: 8px; */
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
	background: url("images/up-arrow.png") no-repeat center 43%;
}

/*STYLING FOR TOP MENU*/
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
  height:43px;
  width: 100%;
  background-color: var(--darkPurple);
  position:fixed;
  z-index:7;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  top: 0;
  left: 0;
  display: none;
}

/* Menu icon styling */
.menuContainer {
  display: none;
  cursor: pointer;
  margin-right: 15px !important;
  padding-right: 7px;
  padding-left: 7px;
  right: 0;
  top: 0;
  position: fixed;
  z-index:8;
}

#mobileMenu {
  display: none;
  padding: 40px 25px;
  text-align: right;
  right:0;
  position: fixed;
  background-color: var(--darkPurple);
  width: 100%;
  position: fixed;
  z-index:8;
}

#mobileMenu ul{
  list-style: none;
  margin: 0 0 0 0;
}

#mobileMenu li{
  padding-top:4px;
  padding-bottom:4px;
  font-size: 18px;
}

#mobileMenu a{
  color: var(--lightPink);
  text-decoration: none;
}

.bar1, .bar2, .bar3 {
    width: 27px;
    height: 3px;
    background-color: var(--lightPink);
    margin: 8px 0;
    transition: 0.4s;
}

.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-8px, 6px);
    transform: rotate(-45deg) translate(-8px, 6px);
}

.change .bar2 { opacity: 0; }

.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}

.centerText {
  text-align: center;
}


/*STYLING FOR EACH PAGE*/
#home {
  width: 100%;
  height: 45vw;
  padding-top: 6rem;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
}

#homeCell {
  padding-left: 120px;
  padding-top: 25px;
}

.bg-1 {
    background: linear-gradient(45deg, transparent 200px, var(--darkPurple) 50px);
    background-size:100% 45vw;
}

#meImg {
  width: 25vw;
  height: 25vw;
  object-fit: contain;
  margin: 15px;
  margin-left:120px;
  border: 10px solid var(--lightPink);
  text-align: center;
  border-radius: 50%;
}

#aboutMe {
  width: auto;
  min-height: 370px;
  background: var(--background2);
}

#aboutMe p, #skills p{
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 30px;
  line-height: 1.9;
  margin-bottom: 0px;
}

#skills h3{
  padding-left: 10%;
  font-size: 1.4em;
  line-height: 1.9;
}

#australia, #worlds, #climbing{
  display: none;
}

#skills{
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
  display: block; /* remove extra space below image */  
}

#education{
  width: 100%;
  resize: both;
  overflow: auto;
  min-height: 550px;
}

#portfolio {
  width: auto;
  display:block;
  overflow:auto;
}

#experience{
  width: auto;
  resize: both;
  overflow: auto;
  min-height: 300px;
}

#contactMe{
  width: auto;
  height: 45vh;
}


/*STYLING FOR PORTFOLIO TABLE*/
.top {
  vertical-align: top;
}
.portfolioCell {
  position:relative;
}
.portfolioCell.image{
  width: auto;
  height: auto;
}
.portfolioCell.image,.portfolioCell .text {
  transition: opacity 0.4s ease-in-out;
}
.portfolioCell .text {
  position:absolute;
  opacity:0;
  color: black;
  font-weight: lighter;
  color: black;
  line-height: 1.8vw;
  font-size: 1.2vw;
  top: 10%;
  left: 7%;
  right: 8%;
  font-family: "Avenir", Avenir;
}
.portfolioCell:hover .image {
  position:relative;
  opacity:0.18;
  z-index: 0;
}
.portfolioCell:hover .text {
  opacity:1;
  font-weight: lighter;
  text-align: center;
  vertical-align: middle;
  color: black;
  line-height: 1.8vw;
  font-size: 1.2vw;
  top: 10%;
    left: 7%;
    right: 8%;
}

/*STYLING FOR EDUCATION DROP DOWN*/
.ac-container{
	margin: 25px 25px 50px 50px;
  float: inherit;
  padding: 2% 4% 4% 4%;
}
.ac-container label{
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
.ac-container label:hover{
	background: var(--background1);
  color: var(--darkPurple);
}
.ac-container input:checked + label,
.ac-container input:checked + label:hover{
	background: var(--background1);
	color: var(--darkPurple);
	box-shadow:
		0px 0px 0px 1px rgba(155,155,155,0.3),
		0px 2px 2px rgba(0,0,0,0.1);
}
.ac-container label:hover:after,
.ac-container input:checked + label:hover:after{
	content: '';
	position: absolute;
	width: 65px;
	height: 24px;
	right: 13px;
	top: 1.1rem;
	background: transparent url(images/arrow_down.png) no-repeat center;
  background-size: 1.2rem;
}
.ac-container input:checked + label:hover:after{
	background-image: url(images/arrow_up.png);
}
.ac-container input{
	display: none;
}
.ac-container article{
	background: rgba(255, 255, 255, 0.5);
	margin-top: -1px;
	overflow: hidden;
	height: 0px;
	position: relative;
	transition:
		height 0.3s ease-in-out,
		box-shadow 0.6s linear;
}
.ac-container input:checked ~ article{
	transition:
		height 0.5s ease-in-out,
		box-shadow 0.1s linear;
	box-shadow: 0px 0px 0px 1px rgba(155,155,155,0.3);
  width: 100%;
  height: auto;
  display: inline-block;
}
.ac-container article p{
	line-height: 23px;
	/* padding: 8px; */
  font-family: "Avenir", Avenir;
  font-size: 1.1em;
}

.light {
  color: var(--lightPink);
}

.dark{
  color: var(--darkPurple);
}

.background {
  background-color: var(--background2);
}

  h1, h2, h3 {
    color: var(--darkPurple);
  }

@media screen and (min-width: 750px){

    #portfolioTable {
      display: block;
    }
    #mobilePortfolioTable {
      display:none;
    }

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

  ul, menu, dir {
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
    display:block;
    color: var(--purple1) !important;
  }

  .icon:hover {
    color: var(--darkPurple) !important;
  }

  .contactText {
    color: var(--purple1)!important;
    font-size: 20px;
    text-decoration: none;
    display: block;
    text-align: center;
    font-weight: bold;
  }

  .contactText:hover {
    color: var(--darkPurple)!important;
    font-size: 20px;
  }

  #ACsubheader{
    font-weight: bolder;
    padding-left: 0px;
    margin-left: -5px;
  }

  .height {
    min-height: 15vh;
  }

  /*  show/hide menu/ portfolio based on page width */
@media (max-width: 775px) {
  #menu     { display: none; }
  .menuContainer, #header { display: inline-block; }
  .menuContainer { top: 0.5rem; }
  #mobilePortfolioTable { display: block; }
  #portfolioTable{ display: none; }
  #home { padding-top: 2rem; }
  #aboutMe p { padding: 1.5rem; }
  .ac-container { margin: 1rem; }
  .ac-container label{ padding: 0.5rem; }
  .icon { font-size: 50px; }
  .contactText { display: none }
  #contactMe { height: 35vh; }
  #header { padding: 0.5rem; }
}

canvas {
  background: #eee;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}


a, p {
  margin-left: 10px;
  margin-top: 10px;
}


p{
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

a:link, a:visited {
    color: var(--salmonPink);
}


</style>
