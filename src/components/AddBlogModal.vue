<template>
    <div>
        <v-card>
            <v-card-title>
                <span class="headline">Add New Blog</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="title" label="Title"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea v-model="content" label="Content" required></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-file-input v-model="file" label="Photo"></v-file-input>
                        </v-col>                        
                    </v-row>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
                <v-btn color="blue darken-1" text >Add</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AddBlogModal',

    data: () => ({
        dialog: false,
        title: '',
        content: '',
        file: [],
    }),

    methods: {

        test() {
            alert(111);
        },

        ...mapActions('blog', ['addNewBlog'])
    },
    
}
</script>