(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{279:function(t,e,c){"use strict";c.r(e);c(76);var r={props:{track:{type:Object,required:!0}},mounted:function(){window.addEventListener("scroll",this.scrollListener)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollListener)},methods:{goToTrack:function(t){this.track.preview_url&&this.$router.push({name:"track-id",params:{id:t}})},selectTrack:function(){this.track.preview_url&&(this.$store.commit("setTrack",this.track),this.$bus.$emit("set-track",this.track))},scrollTop:function(){var t=this;this.intervalId=setInterval((function(){0===window.pageYOffset&&clearInterval(t.intervalId),window.scroll(0,window.pageYOffset-50)}),20)}}},l=c(46),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return t.track.album?c("div",{staticClass:"card"},[c("div",{staticClass:"card-image"},[c("figure",{staticClass:"image is-1by1"},[c("img",{attrs:{src:t.track.album.images[0].url}})])]),c("div",{staticClass:"card-content"},[c("div",{staticClass:"media"},[c("div",{staticClass:"media-left"},[c("figure",{staticClass:"image is-48x48"},[c("img",{attrs:{src:t.track.album.images[0].url}})])]),c("div",{staticClass:"media-content"},[c("p",{staticClass:"title is-6"},[c("strong",[t._v(t._s(t.track.name))])]),c("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.track.artists[0].name))])])]),c("div",{staticClass:"content"},[c("small",[t._v(t._s(t._f("ms-to-mm")(t.track.duration_ms)))]),c("nav",{staticClass:"level"},[c("div",{staticClass:"level-left"},[c("button",{staticClass:"level-item button is-primary"},[c("span",{staticClass:"icon is-small",on:{click:function(e){t.selectTrack(),t.scrollTop()}}},[t._v("▶")])]),c("button",{staticClass:"level-item button is-warning"},[c("span",{staticClass:"icon is-small",on:{click:function(e){return t.goToTrack(t.track.id)}}},[t._v("🌎")])])])])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);