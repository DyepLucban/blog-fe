<template>
    <div>
        <br>
        <v-card v-for="(blog, k) in blogs" :key="k" class="mx-auto mb-5" max-width="700">
            <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            > <!-- IMAGE HERE -->
            <v-card-title>{{ blog.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"></v-card-subtitle>

            <v-card-text class="text--primary">
            <div>{{ blog.content }}</div>
            </v-card-text>

            <v-card-actions>
                
                <v-dialog v-model="dialog" persistent max-width="700">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="orange" v-bind="attrs" v-on="on" text >
                            Edit
                        </v-btn>
                    </template>
                    <UpdateModal></UpdateModal>
                </v-dialog>


                <v-btn color="orange" text>
                    Delete
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UpdateModal from './EditBlogModal';


export default {
    name: 'Blogs',

    data () {
        return {
            dialog: false,
        }
    },
    
    components: {
        UpdateModal,
    },

    async mounted() {
       await this.getAllBlogs()
    },

    computed: {
        ...mapGetters('blog', ['blogs'])
    },

    methods: {
        ...mapActions('blog', ['getAllBlogs', 'getSpecificBlog']),
    },



}
</script>