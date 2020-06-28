<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="700">
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark v-bind="attrs" v-on="on" icon>
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Add New Blog</span>
                </v-card-title>

                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field :v-if="error.message.title" :error-messages="error.message.title" v-model="input.title" label="Title"></v-text-field>
                            </v-col>
                            <v-col cols="12"> 
                                <v-textarea :v-if="error.message.content" :error-messages="error.message.content" v-model="input.content" label="Content" required></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <input type="file" @change="changeImage">
                            </v-col>                        
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="create">Add</v-btn>
                </v-card-actions>
            </v-card>            
        </v-dialog>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AddBlogModal',

    data: () => ({
        dialog: false,
        input: {
            title: '',
            content: '',
            image: null,            
        },
        error: {
            status: false,
            message: []
        },
    }),
    
    methods: { 

        ...mapActions('blog', ['addNewBlog']),
        close() {
            this.dialog = false
            this.input = ''
        },
        
        changeImage(e) 
        {
            let fileReader = new FileReader();

            fileReader.readAsDataURL(e.target.files[0])

            fileReader.onload = (e) => {
                this.input.image = e.target.result
            }
        },        

        async create() {
            let res = await this.addNewBlog(this.input)
            
            if (res.code == 200)
            {
                await this.$store.dispatch('blog/getAllBlogs')
                this.input = ''
                this.dialog = false
            }

            this.error.status = true;
            this.error.message = res.data.message;
        }
    },
    
}
</script>