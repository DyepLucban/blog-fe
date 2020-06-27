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
                <UpdateModal :blog-item="blog"/>
                <DeleteModal :blog-item="blog"/>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UpdateModal from './EditBlogModal';
import DeleteModal from './DeleteBlogModal';


export default {
    name: 'Blogs',

    data () {
        return {

        }
    },
    
    components: {
        UpdateModal,
        DeleteModal,
    },

    async mounted() {
       await this.getAllBlogs()
    },

    computed: {
        ...mapGetters('blog', ['blogs'])
    },

    methods: {
        ...mapActions('blog', ['getAllBlogs']),
    },



}
</script>