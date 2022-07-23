<template>
  <v-btn
    :style="styles"
    color="secondary"
    fab
    fixed
    href="https://sociocom.naist.jp/"
    rel="noopener"
    right
    target="_blank"
    top
  >
    <v-icon>
      mdi-school
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'CoreCta',

    computed: {
      styles () {
        return {
          marginTop: `${this.$vuetify.application.top}px`,
        }
      },
    },
  }
</script>
