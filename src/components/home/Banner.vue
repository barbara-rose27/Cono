<template>
   <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'HomeBanner',
  }
</script>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: require('@/assets/pic1.jpg'),
          },
          {
            src: require('@/assets/pic2.jpg'),
          },
          {
            src: require('@/assets/pic3.jpg'),
          },
          {
            src: require('@/assets/pic4.jpg'),
          },
        ],
      }
    },
  }
</script>