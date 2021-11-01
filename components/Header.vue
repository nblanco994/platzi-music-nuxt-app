<template lang="pug">
   section.hero.is-info
     .hero-head
       header.nav
         .container
            .nav-left.nav-item
              strong.has-text-white 🎵 Platzi Music
            .nav-right.nav-menu
              router-link.nav-item.has-text-white.ml-5(to="/") Buscar
              router-link.nav-item.has-text-white.ml-5(to="about") Nosotros
     .hero-body
        .container.has-text-centered
          h1.title Platzi Music
          h2.subtitle Canciones que estan ¡Vue-nísimas! 😆
          Player
</template>

<style lang="scss" scoped>
  .nav-left {
    float: left;
  }
  .nav-right {
    float: right;
  }
</style>