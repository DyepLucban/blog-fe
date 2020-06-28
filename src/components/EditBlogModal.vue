<template>
    <div>
        <v-dialog v-model="updateDialog" persistent max-width="700">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="orange" v-bind="attrs" v-on="on" text >
                    Edit
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Update Blog</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field :v-if="error.message.title" :error-messages="error.message.title" label="Title" v-model="blogItem.title"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea :v-if="error.message.title" :error-messages="error.message.content" label="Content" required v-model="blogItem.content"></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <input type="file" @change="changeImage">
                            </v-col>                        
                        </v-row>
                    </v-container>
                    
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="updateDialog = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="update">Save</v-btn>
                </v-card-actions>
            </v-card>                    
        </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'EditBlogModal',

    props: {
        blogItem: {
            type: Object
        }
    },

    data: () => ({
        updateDialog: false,
        input: {
            updated_title: '',
            updated_content: '',
        },
        error: {
            status: false,
            message: []
        },
    }),

    async mounted() {

    },

    methods: {
        ...mapActions('blog', ['updateBlog']),

        changeImage(e) 
        {
            let fileReader = new FileReader();

            fileReader.readAsDataURL(e.target.files[0])

            fileReader.onload = (e) => {
                this.blogItem.image = e.target.result
            }
        }, 

        async update() {
            let res = await this.updateBlog(this.blogItem)
            
            if (res.data.code == 200)
            {
                await this.$store.dispatch('blog/getAllBlogs')
                this.updateDialog = false
            }

            this.error.message = res.data.message 
        }
    }
}
</script>