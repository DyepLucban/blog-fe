<template>
    <div>
        <v-dialog v-model="deleteDialog" persistent max-width="700">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="orange" v-bind="attrs" v-on="on" text>
                    Delete
                </v-btn>
            </template>
            <v-card>
                <v-card-title class="headline">Delete Blog</v-card-title>

                <v-card-text>
                    Are you sure you want to delete this Blog?
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="deleteDialog = false">
                        Cancel
                    </v-btn>

                    <v-btn color="green darken-1" text @click="DeleteBtn">
                        Delete
                    </v-btn>

                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    
    name: 'DeleteBlogModal',

    props: {
        blogItem: {
            type: Object
        }
    },

    data: () => ({
        deleteDialog: false
    }),

    async mounted() {

    },

    methods: {
        ...mapActions('blog', ['deleteBlog']),

        async DeleteBtn()
        {
            let res = await this.deleteBlog(this.blogItem)

            if (res.status == 200)
            {
                await this.$store.dispatch('blog/getAllBlogs')
                await this.$store.dispatch('blog/getAllDeletedBlogs')

                this.deleteDialog = false
            }
        }
    },

}
</script>