<template>
    <div>
      <v-app-bar color="deep-purple accent-4"  dark>
        <v-toolbar-title>Sample Blog Site</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field @keyup="search" v-model="search_box.text"></v-text-field>      
        <AddModal />
        <TrashModal />
      </v-app-bar>        
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AddModal from './AddBlogModal';
import TrashModal from './ViewTrashModal';

export default {
    name: 'AppBar',

    components: {
      AddModal,
      TrashModal,
    },

    data: () => ({
      dialog: false,
      search_box: {
        text: '',
      },
    }),

    methods: {
      ...mapActions('blog', ['searchBlog']),

      async search()
      {
        let res = await this.searchBlog(this.search_box)

        if (res.status == 200)
        {
          await this.$store.dispatch('blog/getAllBlogs')
        }

      }

    }
}
</script>