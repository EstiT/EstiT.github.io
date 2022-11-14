<script setup>
import { mobile, desktop } from '../utils/Breakpoints';

</script>

<template>
  <div id="home" class="bg-1">
    <div id="homeCell">
      <h1 class="light" id="name">Esti Tweg</h1>
      <h2 class="light" id="subhead">Frontend Developer</h2>
    </div>
    <img id="meImg" src="/images/me.jpg" />
  </div>
</template>

<style scoped>
.bg-1 {
  background: linear-gradient(45deg, transparent 200px, var(--darkPurple) 50px);
  background-size: 100% 45vw;
}

#home {
  height: 45vw;
  padding-top: 6rem;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  position: relative;
  color: var(--lightPink);
}

#homeCell {
  padding-left: 120px;
  padding-top: 25px;
}

h2 {
  padding-left: 1.5rem;
  font-weight: 500;
}

#meImg {
  width: 25vw;
  height: 25vw;
  object-fit: contain;
  margin: 15px;
  margin-left: 120px;
  border: 10px solid var(--lightPink);
  text-align: center;
  border-radius: 50%;
}

@media (max-width: 775px) {
  #home {
    height: unset;
    padding: 3rem 2rem 2rem;
  }

  #homeCell {
    padding: 0rem;
    width: 50%;
  }

  #meImg {
    border: 4px solid var(--lightPink);
    margin-left: 1rem;
  }

  h2 {
    padding-left: 1rem;
  }
}
</style>
