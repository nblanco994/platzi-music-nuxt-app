<template lang="pug">
div(v-if="track && track.id")
  Header
  .columns.is-multiline
    .column.is-3.has-text-centered
      figure.media-left
        p.image
          img(:src="track.album.images[0].url")
        p.has-text-centered.button-bar
          a.button.is-primary.is-large.m-5
            span.icon(@click="selectTrack") &#x25B6;
    .column.is-8
      .panel
        .panel-heading
          h1.title {{ `${track.name} - ${track.artists[0].name}` }}
        .panel-block
          article.media
            .media-content
              .content
                ul(v-for="(v, k) in track")
                  li 
                    strong {{ k }}:&nbsp;
                    span {{ v }}
            nav.level
              .level-left
                a.level-item
</template>

<script>
import { mapState, mapActions } from 'vuex'

// import trackMixin from '~/mixins/track' // id.vue es trackDetail

import trackService from '~/plugins/track'

export default {
  // mixins: [ trackMixin ],

  asyncData ({ params }) {
      const id = params.id
      
      return trackService.getById(id).then(res => {
          return { track: res }
      })

      /* if(!this.track || !this.track.id || this.track.id !== id) {
        this.getTrackById({ id })
          .then(() => {
            console.log('Track loaded...')
          })
      } */
  },
    data () {
    return {
        track: {}
    }
  },

   head () {
        return {
            title: this.track.name
        }
    },

   computed: {
     ...mapState(['track']),
   },
   
   methods: {
     ...mapActions(['getTrackById']),
     
      selectTrack () {
            if (!this.track.preview_url) { return }
            this.$store.commit('setTrack', this.track)
            this.$bus.$emit('set-track', this.track)
        }
   }

}
</script>

<style lang="scss" scoped>
.column {
    margin: 20px;
}
</style>