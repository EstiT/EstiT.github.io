<script setup>
import { mobile, desktop } from '../utils/Breakpoints';

const projects = [
  {
    title: 'Clueless Clothes iOS app',
    description: 'Add photos of your clothes and match them to create outfits.',
    link: 'https://github.com/EstiT/CluelessClothes-iOS',
    image: '/images/cluelessClothes.png',
  },
  {
    title: 'Square Game',
    description: 'While the red square moves, press the space bar to stop it inside the bounds.',
    link: 'https://github.com/EstiT/squareGame',
    image: '/images/square.png',
  },
  {
    title: 'Image Overlay',
    description: 'You specify two images, one to be the background and the other to be placed transparently on top. In this example, there is a Mario character floating in a level.',
    link: 'https://github.com/EstiT/ImageOverlay',
    image: '/images/mario.png',
  },
  {
    title: 'Emoji-Dash',
    description: 'iOS game for my honours project. Uses SpriteKit.',
    link: 'https://github.com/EstiT/Emoji-Dash-iOS',
    image: '/images/emojiDash.jpeg',
  },
  {
    title: 'Climbing Grade Converter iOS app',
    description: 'Convert climbing grades between different systems used world wide.',
    link: 'https://github.com/EstiT/ClimbingGradeConverter',
    image: '/images/climbingConverter.png',
  },
  {
    title: 'Climbing training tracker iOS app',
    description: 'iOS app developed with SwiftUI to track climbing progress in an analytical and visual manner.',
    link: 'https://github.com/EstiT/logIt-SwiftUI',
    image: '/images/logit.png',
  },
  {
    title: 'CUhacking Android App',
    description: 'Group project for school. Created an app to make the hackathon more enjoyable for hackers.',
    link: 'https://github.com/cuhacking/CUHackingApp',
    image: '/images/cuhacking.png',
  },
  {
    title: 'Tic Tac Toe',
    description: 'Play Tic Tac Toe against a computer.',
    link: 'https://github.com/EstiT/TicTacToe',
    image: '/images/tictactoe.png',
  },
  {
    title: 'Image to Ascii Art',
    description: 'Upload an image, choose what the background colour is and what to save the text file as. The program converts each pixel in the image to a symbol. Small images work best.',
    link: 'https://github.com/EstiT/AsciiArtMaker',
    image: '/images/asciiPresent.png',
  },
]

const mobileProjects = [projects[3], projects[0], projects[5], projects[4]]
</script>

<template>
  <div id="portfolio" class="background">
    <a style="text-decoration: none;" target="_blank" href="https://github.com/EstiT">
      <h2 class="dark" style="padding-top: 55px">Portfolio 🎨</h2>
    </a>
    <p>A collection of personal apps and websites with the goal of learning new technologies or creating a useful tool.</p>
    <div id="portfolioTable">
      <div v-for="(project, index) in desktop ? projects : mobileProjects" :key="index" class="portfolioCell">
        <a target="_blank	" :href="project.link">
          <img class="image" :src="project.image" />
        </a>
        <a target="_blank	" :href="project.link">
          <p class="text">
            <u style="color: black;"><b><br />{{ project.title }}</b></u><br>
            <span style="color: black;"> {{ project.description }} </span>
            <br><br>
          </p>
        </a>
      </div>
    </div>
    <hr style="margin-top:30px; margin-bottom:0px;">
  </div>
</template>

<style scoped>
#portfolio {
  width: auto;
  display: block;
  overflow: auto;
  padding: 0 35px;
}

img {
  max-width: 100%;
  height: auto;
  width: auto;
}

.background {
  background-color: var(--background2);
}

/*STYLING FOR PORTFOLIO TABLE*/
.top {
  vertical-align: top;
}

.portfolioCell {
  position: relative;
}

.portfolioCell.image,
.portfolioCell .text {
  transition: opacity 0.4s ease-in-out;
}

.portfolioCell .text {
  position: absolute;
  opacity: 0;
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
  position: relative;
  opacity: 0.18;
  z-index: 0;
}

.portfolioCell:hover .text {
  opacity: 1;
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

#portfolioTable {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 1rem;
}

@media screen and (min-width: 750px) {}

@media (max-width: 775px) {
  #portfolioTable {
    grid-template-columns: auto;
  }

  #portfolio {
    padding: 0 25px;
  }
}
</style>
