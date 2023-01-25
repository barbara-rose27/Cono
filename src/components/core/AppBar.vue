<template>
  <v-app-bar
    app
    flat
    color="white"
    
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-n1 py-4">
      <v-row align="center">
        <v-img
          :src="require('@/assets/Cono.png')"
          class="mr-5"
          contain
          height="80"
          width="30"
          max-width="310"
          @click="$vuetify.goTo(0)"
        /> 
      
          <b>{{"A Word Emotion Analysis Tool"}}</b>
      
        <v-spacer />

        
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },
    },
  }
</script>
