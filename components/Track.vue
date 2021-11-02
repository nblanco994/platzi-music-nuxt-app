<template lang="pug">
    .card(v-if="track.album")
        .card-image
            figure.image.is-1by1
                img(v-bind:src="track.album.images[0].url")
        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(v-bind:src="track.album.images[0].url")
                .media-content
                    p.title.is-6
                        strong {{ track.name }}
                    p.subtitle.is-6 {{ track.artists[0].name }}
            .content
                small {{ track.duration_ms | ms-to-mm }}
                nav.level
                    .level-left
                        button.level-item.button.is-primary
                            span.icon.is-small(@click="selectTrack(); scrollTop();") ▶
                        button.level-item.button.is-warning
                            span.icon.is-small(@click="goToTrack(track.id)") 🌎
</template>

<script>

export default {
    props: {
        track: {
            type: Object,
            required: true
        }
    },

    mounted () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollListener)
  },

    methods: {
        goToTrack (id) {
            if (!this.track.preview_url) { return }
            this.$router.push({ name: 'track-id', params: { id } })
        },

        selectTrack () {
            if (!this.track.preview_url) { return }
            this.$store.commit('setTrack', this.track)
            this.$bus.$emit('set-track', this.track)
        },

        scrollTop () {
        this.intervalId = setInterval(() => {
            if (window.pageYOffset === 0) {
            clearInterval(this.intervalId)
            }
            window.scroll(0, window.pageYOffset - 50)
        }, 20)
        }
    }
}
</script>
