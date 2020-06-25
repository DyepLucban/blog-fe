<template>
    <div>
      <v-app-bar color="deep-purple accent-4" dense dark>
        <v-toolbar-title>Sample Blog Site</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="700">
          <template v-slot:activator="{ on, attrs }">
              <v-btn dark v-bind="attrs" v-on="on" icon>
                  <v-icon>mdi-pencil</v-icon>
              </v-btn>
          </template>
          <AddModal/>
        </v-dialog>
      </v-app-bar>        
    </div>
</template>

<script>
import AddModal from './AddBlogModal';

export default {
    name: 'AppBar',

    components: {
      AddModal,
    },

    data: () => ({
      dialog: false,
    }),
}
</script>