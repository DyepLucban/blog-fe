<template>
    <div>

        <v-dialog v-model="deleteDialog" persistent max-width="700">
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on" icon>
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </template>

            <v-card max-width="500" class="mx-auto">
                <v-toolbar color="indigo" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>

                <v-toolbar-title>Deleted Blogs</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon @click="deleteDialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>

                </v-toolbar>
                <v-list v-if="deleted_blogs.length != 0">
                    <v-list-item v-for="(items, k) in deleted_blogs" :key="k">
                        <v-list-item-icon>
                            <v-btn @click="restore(items.id)">
                                <v-icon color="green">mdi-recycle</v-icon>
                            </v-btn>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="items.title"></v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-avatar>
                            <v-img></v-img>
                        </v-list-item-avatar>
                    </v-list-item>
                </v-list>
                <v-card-text v-else>
                    <br>
                    No Deleted Blogs
                </v-card-text>
            </v-card>


        </v-dialog>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'ViewTrashModal',

    data: () => ({
        deleteDialog: false,
    }),
    
    async mounted() {
       await this.getAllDeletedBlogs()
    },

    computed: {
        ...mapGetters('blog', ['deleted_blogs'])
    },

    methods: {
        ...mapActions('blog', ['getAllDeletedBlogs', 'restoreDeleteBlog', 'getAllBlogs']),

        async restore(id)
        {
            let res = await this.restoreDeleteBlog(id)

            if (res.status == 200)
            {
                await this.getAllDeletedBlogs();
                await this.getAllBlogs();
            }
        }
    },
    
}
</script>