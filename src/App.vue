<template>
  <v-app>
    <AppBar />
    <v-content>
      <Blogs />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import Blogs from './components/Blogs';

export default {
  name: 'App',

  components: {
    AppBar,
    Blogs,
  },

  data: () => ({
    //
  }),
};
</script>
